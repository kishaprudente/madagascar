import axios from 'axios';

export default {
  // USER ROUTES
  createUser: (userData) => {
    return axios.post('/auth/signup', userData);
  },
  signinUser: (userData) => {
    return axios.post('/auth/signin', userData);
  },
  logoutUser: () => {
    localStorage.removeItem('user');
    return axios.post('/auth/logout');
  },
  getUserData: (id) => {
    return axios.get(`/auth/user/${id}`);
  },
  checkUser: () => {
    return axios.get('/auth');
  },
};
