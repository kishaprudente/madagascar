const db = require('../models');

// Defining methods for the repliesController
module.exports = {
  findAll: (req, res) => {
    db.Reply.find({})
      .populate('post')
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Reply.findById(req.params.id)
      .populate('post')
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: ({ body }, res) => {
    db.Reply.create(body)
      .then(({ _id }) =>
        db.Post.findOneAndUpdate(
          { _id: body.post },
          { $set: { reply: _id } },
          { new: true }
        )
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Reply.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Reply.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
