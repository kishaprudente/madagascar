const router = require('express').Router();
const repliesController = require('../../controllers/repliesController');

// Matches with "/api/replies/"
router
  .route('/')
  .get(repliesController.findAll)
  .post(repliesController.create);

// Matches with "/api/replies/:id"
router
  .route('/:id')
  .get(repliesController.findById)
  .put(repliesController.update)
  .delete(repliesController.remove);

module.exports = router;
