const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://localhost/madagascardb'
);

const replySeed = [
  {
    response: 'You will be ok!',
    post:'5ee19544f64becb5e468fb26'
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