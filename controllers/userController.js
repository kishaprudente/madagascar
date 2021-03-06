const db = require('../models');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');

// Defining methods for the UsersController
module.exports = {
  //All post will show up and if there is a reply then it should show as well
  update: async (req, res) => {
    try {
      const user = await db.User.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.json(user);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  remove: async (req, res) => {
    try {
      const user = await db.User.findById({ _id: req.params.id });
      user.remove();
      res.json(user);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  getData: (req, res) => {
    db.User.findById(req.params.id)
      .populate({
        path: 'posts',
        populate: { path: 'reply' },
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // auth contollers
  // sign up
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      // ADD VALIDATION
      await db.User.findOne({ username: username }, (err, user) => {
        console.log('USERNAME', username);
        console.log('USER SIGNUP', user);
        if (err) {
          console.log('User.js post error: ', err);
        } else if (user) {
          res.json({ error: `Username '${username}' is already taken` });
        } else {
          const newUser = new db.User({
            username: username,
            password: password,
          });
          newUser.save((err, savedUser) => {
            if (err) {
              console.log(err);
              return res.json(err);
            }
            console.log(savedUser);
            const { _id, username } = savedUser;
            const body = {
              _id: _id,
              username: username,
            };
            console.log('body', body);
            //Sign the JWT token and populate the payload with the user email and id
            const token = jwt.sign({ user: body }, 'top_secret');
            console.log('TOKEN', token);
            // localStorage.setItem('token', token);
            //Send back the token to the user
            return res.json({ body, token });
          });
        }
      });
    } catch (err) {
      throw err;
    }
  },
  // signin
  signin: (req, res, next) => {
    console.log('REQ', req.body);
    passport.authenticate('signin', (err, user) => {
      req.login(user, { session: false }, () => {
        try {
          if (!user) {
            return next('Error logging in');
          } else {
            //We don't want to store the sensitive information such as the
            //user password in the token so we pick only the email and id
            console.log('user', user);
            const { _id, username } = user;
            const body = {
              _id: _id,
              username: username,
            };
            console.log('body', body);
            //Sign the JWT token and populate the payload with the user email and id
            const token = jwt.sign({ user: body }, 'top_secret');
            console.log('TOKEN', token);
            return res.send({ body, token });
          }
        } catch (err) {
          throw err;
        }
      });
    })(req, res, next);
  },
  // logout
  logout: (req, res) => {
    console.log(req.user);
    if (req.user) {
      req.logout();
      res.redirect('/');
      res.send({ msg: 'logging out' });
    } else {
      res.send({ msg: 'no user to log out' });
    }
  },
  checkUser: (req, res, next) => {
    if (req.user) {
      res.json({
        username: req.user.username,
        id: req.user.id,
      });
    } else {
      res.json({ user: null });
      next();
    }
  },
};
