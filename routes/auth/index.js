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

module.exports = router;
