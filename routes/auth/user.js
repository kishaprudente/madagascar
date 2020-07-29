const router = require('express').Router();
const userController = require('../../controllers/userController');

// @route GET /auth
router.route('/').get(userController.checkUser);

// @route POST /auth/signup
router.route('/signup').post(userController.signup);

// @route POST /auth/login
router.route('/signin').post(userController.signin);

// @route POST /auth/logout
router.route('/logout').post(userController.logout);

// @route GET /user/id
router
  .route('/user/:id')
  .get(userController.getData)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
