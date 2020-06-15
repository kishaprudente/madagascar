const router = require('express').Router();
const userRoutes = require('./user');

//Routes
router.use('/', userRoutes);

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
