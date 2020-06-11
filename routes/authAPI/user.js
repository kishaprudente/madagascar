const router = require('express').Router();
const passport = require('../../config/passport');

// Requiring our models and passport as we've configured it
const db = require('../../models');

module.exports = () => {
  // route: /api/auth/login
  router.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
    }),
    (req, res) => {
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id,
      });
    }
  );

  // route: /api/auth/signup
  router.post('/signup', async (req, res) => {
    try {
      await db.User.create({
        username: req.body.username,
        password: req.body.password,
      });
      res.redirect(307, '/login');
    } catch (err) {
      res.status(401).json(err);
    }
  });

  // route: /api/auth/user_data
  // Route for getting some data about our user to be used client side
  router.get('/user_data', (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id,
      });
    }
  });
};


module.exports = router;