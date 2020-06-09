const router = require('express').Router();
const postRoutes = require('./posts');

// Book routes
router.use('/posts', postRoutes);

module.exports = router;
