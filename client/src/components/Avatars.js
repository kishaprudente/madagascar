import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

import jiyoonKim from '../assets/avatars/jiyoonKim.jpeg';
import kaitlynRodriguez from '../assets/avatars/kaitlynRodriguez.jpeg';
import kevinWu from '../assets/avatars/kevinWu.jpeg';
import kishaPrudente from '../assets/avatars/kishaPrudente.jpeg';
import chirpy from '../assets/chirpy.svg';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

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
const classes = useStyles();

  return (
    <Grid container style={avatarBlock}>
      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar
          alt='Kevin Wu'
          src={kevinWu}
          className={classes.large}
          style={avatar}
        />
        <Typography style={font}>Kevin Wu</Typography>
        <IconButton
          style={{ padding: '0', marginLeft: '5px', marginBottom: '5px' }}
          href='https://github.com/kevkevwuhoo'
        >
          <GitHubIcon className='material-icons md-dark' />
        </IconButton>
      </Grid>

      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar
          alt='Kisha Prudente'
          src={kishaPrudente}
          className={classes.large}
          style={avatar}
        />
        <Typography style={font}>Kisha Prudente</Typography>
        <IconButton
          style={{ padding: '0', marginLeft: '5px', marginBottom: '5px' }}
          href='https://github.com/kishaprudente'
        >
          <GitHubIcon className='material-icons md-dark' />
        </IconButton>
      </Grid>

      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar
          alt='Kaitlyn Rodriguez'
          src={kaitlynRodriguez}
          className={classes.large}
          style={avatar}
        />
        <Typography style={font}>Kaitlyn Rodriguez</Typography>
        <IconButton
          style={{ padding: '0', marginLeft: '5px', marginBottom: '5px' }}
          href='https://github.com/Kaitlyn-Lynette'
        >
          <GitHubIcon className='material-icons md-dark' />
        </IconButton>
      </Grid>

      <Grid item xs={6} sm={3} style={avatar}>
        <Avatar
          alt='Jiyoon Kim'
          src={jiyoonKim}
          className={classes.large}
          style={avatar}
        />
        <Typography style={font}>Jiyoon Kim</Typography>
        <IconButton
          style={{ padding: '0', marginLeft: '5px', marginBottom: '5px' }}
          href='https://github.com/jiyoon9886'
        >
          <GitHubIcon className='material-icons md-dark' />
        </IconButton>
      </Grid>
      <Grid item xs={12} style={avatar}>
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
	marginBottom: '5px',
};

const font = {
  fontFamily: 'Ruluko',
  fontSize: '16px',
  color: 'black',
  textAlign: 'center',
};