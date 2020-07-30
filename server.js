const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const dbConnection = require('./config/db_connection');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  // We need to use sessions to keep track of our user's login status
  .use(
    session({
      secret: 'supersecretkeythatnooneknows',
      store: new MongoStore({ mongooseConnection: dbConnection }),
      resave: false, //required
      saveUninitialized: false, //required
    })
  )
  .use(passport.initialize())
  .use(passport.session());
// Add routes, both API and view
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/client/build'));
}

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'service-worker.js'));
});

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
