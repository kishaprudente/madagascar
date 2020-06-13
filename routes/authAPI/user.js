const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../models');
const keys = require('../../config/keys');

const validateSignupInput = require('../authAPI/validation/signup');
const validateLoginInput = require('../authAPI/validation/login');

// @route POST api/auth/signup
// @desc Register user
// @access Public
router.post('/signup', async (req, res) => {
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

});

// api/aut/login
router.post('/login', async (req, res) => {
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
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's username and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  }
});

module.exports = router;