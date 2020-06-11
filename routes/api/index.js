const router = require('express').Router();
const postRoutes = require('./posts');
const replyRoutes = require('./replies');

//Routes
router.use('/posts', postRoutes);
router.use('/replies', replyRoutes);

module.exports = router;
