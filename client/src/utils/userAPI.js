import axios from 'axios';

export default {
  // USER ROUTES
  createUser: (userData) => {
    console.log(userData);
    return axios.post('/api/auth/signup', userData);
  },
  loginUser: (userData) => {
    console.log(userData);
    return axios.post('/api/auth/login', userData);
  },
  logoutUser: () => {
    localStorage.removeItem('user');
    return axios.post('/api/auth/logout');
  },
  getUserData: (id) => {
    return axios.get(`/api/auth/user/${id}`);
  },
  checkUser: () => {
    return axios.get('/api/auth/');
  },
};
