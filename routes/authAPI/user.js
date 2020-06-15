const router = require('express').Router();
const userController = require('../../controllers/userController');

// @route GET api/auth
router
  .route('/')
  .get(userController.checkUser);

// @route POST api/auth/signup
router
  .route('/signup')
  .post(userController.signup);

// @route POST api/auth/login
router
  .route('/login')
  .post(userController.login);

// @route POST api/auth/logout
router
  .route('/logout')
  .post(userController.logout);

// @route GET api/auth/user/id
router
  .route('/user/:id')
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;