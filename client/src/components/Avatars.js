import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import jiyoonKim from '../assets/avatars/jiyoonKim.jpeg';
import kaitlynRodriguez from '../assets/avatars/kaitlynRodriguez.jpeg';
import kevinWu from '../assets/avatars/kevinWu.jpeg';
import kishaPrudente from '../assets/avatars/kishaPrudente.jpeg';

export default function ImageAvatars() {
// const axios = require('axios');

// const usernames = [
//   'kishaprudente',
//   'Kaitlyn-Lynette',
//   'kevkevwuhoo',
//   'jiyoon9886',
// ];
// let userData = {};

// const getGithubProfile = (username) => {
// axios.get('https://api.github.com/users/' + username);
// }

// console.log(getGithubProfile('kishaprudente'));

// usernames.forEach((username)=>{	 
// userData = getGithubProfile(username);
// console.log(userData);
// });

  return (
    <Grid container display='flex' flexDirection='row'>
      <Grid item>
        <Avatar alt='Kevin Wu' src={kevinWu} />
        <Avatar alt='Kisha Prudente' src={kishaPrudente} />
        <Avatar alt='Kaitlyn Rodriguez' src={kaitlynRodriguez} />
        <Avatar alt='Jiyoon Kim' src={jiyoonKim} />
      </Grid>
    </Grid>
  );
}