const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema ({
  response: {type: String, required: true},
  post:
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
});

const Reply = mongoose.model('Reply', ReplySchema);

module.exports = Reply;

