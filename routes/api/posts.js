const router = require('express').Router();
const postsController = require('../../controllers/postsController');

// Matches with "/api/post"
router.route('/')
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/post/:id"
router
  .route('/:id')
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;