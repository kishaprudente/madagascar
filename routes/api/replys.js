const router = require('express').Router();
const replysController = require('../../controllers/replysController');

// Matches with "/api/posts"
// api/routes/id
// api/post/id/replys
router.route('/post/:id')
  .get(replysController.findAll)
  .post(replysController.create);

// Matches with "/api/posts/:id"
router
  .route('/:id')
  .get(replysController.findById)
  .put(replysController.update)
  .delete(replysController.remove);

module.exports = router;