/* eslint-disable no-unused-vars */
const router = require('express').Router();

//Let's say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
// @ROUTE /user/profile?secret_token=
router.get('/profile', (req, res, next) => {
  //We'll just send back the user details and the token
  res.send({
    message: 'You made it to the secure route',
    user: req.user,
    token: req.query.secret_token,
  });
});

module.exports = router;
