const router = require('express').Router();
const passport = require('passport');
const user = require('./user');
const secureRoute = require('./secure-route');

//Routes
router.use('/', user);
router.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  secureRoute
);

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
