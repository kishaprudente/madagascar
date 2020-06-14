const router = require('express').Router();
const userController = require('../../controllers/userController');

// @route POST api/auth/signup
router
  .route('/signup')
  .post(userController.signup);

// @route POST api/auth/login
router
  .route('/login')
  .post(userController.login);

// @route GET api/auth/user
router
  .route('/user')
  .get(userController.findAll);

// @route GET api/auth/user/id
router
  .route('/user/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;