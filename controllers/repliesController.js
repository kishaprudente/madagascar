const db = require('../models');

// Defining methods for the postsController
module.exports = {
  //All post will show up and if there is a reply then it should show as well
  findAll: (req, res) => {
    db.Reply
      .find({})
      .populate('post')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Reply
      .findById(req.params.id)
      .populate('post')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: ({ body }, res) => {
    db.Reply
      .create(body)
      .then(({ _id }) => db.Post.findOneAndUpdate({}, { $set: { reply: _id }}, { new: true }))
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { replies: _id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Reply
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Reply
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
