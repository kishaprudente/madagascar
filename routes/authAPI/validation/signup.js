const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateSignupInput(data) {
  console.log(data);
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirm = !isEmpty(data.confirm) ? data.confirm : '';

  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.usename = 'Username field is required';
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  if (Validator.isEmpty(data.confirm)) {
    errors.confirm = 'Confirm password field is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!Validator.equals(data.password, data.confirm)) {
    errors.confirm = 'Passwords must match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};