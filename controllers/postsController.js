const db = require('../models');

// Defining methods for the postsController
module.exports = {
  //All post will show up and if there is a reply then it should show as well
  findAll: (req, res) => {
    db.Post
      .find({})
      .populate('reply')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Post
      .findById(req.params.id)
      .populate({
        path: 'reply',
        populate: { path: 'user' }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Post.create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { posts: _id } }, { new: true }))
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
