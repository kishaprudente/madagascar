import axios from 'axios';

export default {
  // POST ROUTES
  getPost: function() {
    return axios.get('/api/posts');
  },
  // Create a new post
  createPost: function(postData) {
    return axios.post('/api/posts', postData);
  },
  // Updates post with reply data
  updatePostResponse: function(id, newPostData) {
    return axios.put(`/api/posts/${id}`, newPostData);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete('/api/posts/' + id);
  },

  // REPLY ROUTES
  // Get replies from database
  getReplies: function() {
    return axios.get('api/replies');
  },
  // Saves a reply to the database
  replyPost: function(replyData) {
    return axios.post('/api/replies', replyData);
  },
};
