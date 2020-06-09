const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  id: { type: String, required: true },
  mood: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  posted: {type: Boolean, default: false}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;