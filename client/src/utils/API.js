import axios from 'axios';

export default {
  // Get all post 
  getPost: function() {
    return axios.get('/api/posts');
  },
  createPost: function(postData) {
    return axios.post('/api/posts', postData);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete('/api/posts/' + id);
  },
  // Saves a post to the database
  replyPost: function(replyData) {
    return axios.post('/api/replys', replyData);
  }
};
