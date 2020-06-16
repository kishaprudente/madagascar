const db = require('../models');
const passport = require('../config/passport');

// Defining methods for the UsersController
module.exports = {
  //All post will show up and if there is a reply then it should show as well
  update: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
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
        if (err) {
          console.log('User.js post error: ', err);
        } else if (user) {
          res.json({
            error: `Sorry, already a user with the username: ${username}`,
          });
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
            res.json(savedUser);
          });
        }
      });
    } catch (error) {
      return error;
    }
  },
  // login
  login: (req, res, next) => {
    passport.authenticate('local', function(err, user) {
      if (err) {
        return next(err);
      }
      console.log('logged in', user);
      var userInfo = {
        username: user.username,
        id: user.id,
      };
      res.send(userInfo);
    })(req, res, next);
  },
  // logout
  logout: (req, res) => {
    if (req.user) {
      req.logout();
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
