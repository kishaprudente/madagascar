const passport = require('passport');
const db = require('../models');

const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'signin',
  new localStrategy(
    {
      usernameField: 'username', // not necessary, DEFAULT
    },
    function(username, password, done) {
      db.User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect username' });
        }
        if (!user.checkPassword(password)) {
          return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  db.User.findOne({ _id: id }, 'username', (err, user) => {
    done(null, user);
  });
});

//This verifies that the token sent by the user is valid
passport.use(
  new JWTstrategy(
    {
      //secret we used to sign our JWT
      secretOrKey: 'top_secret',
      //we expect the user to send the token as a query parameter with the name 'secret_token'
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
    },
    async (token, done) => {
      try {
        //Pass the user details to the next middleware
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = passport;
