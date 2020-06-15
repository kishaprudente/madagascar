// const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const keys = require('../config/keys');
const db = require('../models');

// const validateSignupInput = require('../routes/authAPI/validation/signup');
// const validateLoginInput = require('../routes/authAPI/validation/login');

// Defining methods for the UsersController
module.exports = {
  //All post will show up and if there is a reply then it should show as well
  findAll: (req, res) => {
    db.User.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
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

  /**
  // auth contollers
  // sign up
  signup: async (req, res) => {
    try {
      const { username, password, confirm } = req.body;
      // Form validation
      const { errors, isValid } = validateSignupInput({ username, password, confirm });
      // Check validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const user = await db.User.findOne({ username });
      if (user) {
        return res.status(400).json({ username: 'Username already exists' });
      } else {
        const newUser = new db.User({
          username: username,
          password: password,
          confirm: confirm
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) {
              throw err;
            }
            newUser.password = hash;
            const saveUser = await newUser.save();
            res.json(saveUser);
          });
        });
      }
    } catch (err) {
      throw err;
    }
  },
  // login
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      // Form validation
      const { errors, isValid } = validateLoginInput(req.body);
      // Check validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      // Find user by username
      const user = await db.User.findOne({ username });
      // Check if user exists
      if (!user) {
        return res
          .status(404)
          .json({ usernamenotfound: 'username not found' });
      }
      // Check password
      const isMatched = await bcrypt.compare(password, user.password);
      if (isMatched) {
        // Create JWT Payload
        const payload = {
          id: user.id,
          username: user.username
        };
          // Sign token
        jwt.sign(payload, keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({ success: true, token: 'Bearer ' + token });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    } catch (err) {
      throw err;
    }
  },
  // logout
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  },
  */
};
