const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'Username is required'],
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: passwordReg
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
UserSchema.pre('save', function(next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======');
    next();
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
