const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  //taking the name of the emoji
  mood: { type: String, required: true },
  //this is what the user wrote in the form field
  post: { type: String, required: true },
  //should be the date it was posted
  date: { type: Date, default: Date.now },
  //sent means sending post
  sent: { type: Boolean, default: false },
  reply: {
    type: Schema.Types.ObjectId,
    ref: 'Reply',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
