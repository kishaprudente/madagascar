import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import jiyoonKim from '../assets/avatars/jiyoonKim.jpeg';
import kaitlynRodriguez from '../assets/avatars/kaitlynRodriguez.jpeg';
import kevinWu from '../assets/avatars/kevinWu.jpeg';
import kishaPrudente from '../assets/avatars/kishaPrudente.jpeg';
import chirpy from '../assets/chirpy.svg';



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
    <Grid container justify='space-around' style={avatarBlock}>
      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar alt='Kevin Wu' src={kevinWu} style={avatar} />
        <Typography style={font}>
          <Link to='https://github.com/kevkevwuhoo'>Kevin Wu</Link>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar alt='Kisha Prudente' src={kishaPrudente} style={avatar} />
        <Typography style={font}>
          <Link to='https://github.com/kishaprudente'>Kisha Prudente</Link>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar alt='Kaitlyn Rodriguez' src={kaitlynRodriguez} style={avatar} />
        <Typography style={font}>
          <Link to='https://github.com/Kaitlyn-Lynette'>Kaitlyn Rodriguez</Link>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar alt='Jiyoon Kim' src={jiyoonKim} style={avatar} />
        <Typography style={font}>
          <Link to='https://github.com/jiyoon9886'>Jiyoon Kim</Link>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar alt='chirpy the bird' src={chirpy} style={avatar} />
        <Typography style={font}>Chirpy</Typography>
      </Grid>
    </Grid>
  );
}

const avatarBlock = {
	paddingTop: '5px',
};

const avatar = {
  display: 'inline-block',
  alignContent: 'center',
	textAlign: 'center',
	paddingBottom: '5px',
};

const font = {
  fontFamily: 'Reenie Beanie',
};