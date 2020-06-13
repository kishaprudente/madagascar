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

const User = mongoose.model('User', UserSchema);

module.exports = User;