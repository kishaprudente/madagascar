const router = require('express').Router();
const postRoutes = require('./posts');

//Routes
router.use('/posts', postRoutes);

module.exports = router;
