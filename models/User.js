const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is Required'
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [({ length }) => length >= 6, 'Password should be longer.']
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
});

UserSchema.methods = {
  checkPassword: (inputPassword) => {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
UserSchema.pre('save', (next) => {
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