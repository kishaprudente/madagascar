const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://localhost/madagascardb'
);

const replySeed = [
  {
    response: 'You will be ok!',
    post:'5ee1a85254d653c1078a5932'
  },
];

db.Reply
  .remove({})
  .then(() => db.Reply.collection.insertMany(replySeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });