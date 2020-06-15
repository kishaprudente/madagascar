import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import chirpy from '../assets/chirpy.svg';
import userAPI from '../utils/userAPI';

export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShow(!show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const login = await userAPI.loginUser({
        username: user.username,
        password: user.password,
      });
      console.log(login);
      if (login.status === 200) {
        localStorage.setItem('user', JSON.stringify(login.data));
      }
      window.location.replace('/moodboard');
    } catch (err) {
      throw err;
    }
  };

  return (
    <Grid
      container
      style={container}
      justify='space-evenly'
      alignItems='center'
      direction='column'
    >
      <Grid item />
      <Grid item>
        <img src={chirpy} alt='chirpy the bird' />
      </Grid>

      <Grid item style={{ width: '180px' }}>
        <TextField
          style={{ marginBottom: '10px' }}
          label='Username'
          name='username'
          id='outlined-size-normal'
          placeholder='Username'
          variant='outlined'
          onChange={(e) => handleInputChange(e)}
        ></TextField>
        <TextField
          style={{ marginBottom: '10px' }}
          label='Password'
          name='password'
          type={show ? 'text' : 'password'}
          id='filled-adornment-password'
          placeholder='Password'
          variant='outlined'
          onChange={(e) => handleInputChange(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>

      <Grid item>
        <Button
          style={buttonStyle}
          variant='contained'
          color='primary'
          onClick={handleLogin}
        >
          Login
        </Button>
      </Grid>

      <Grid item>
        No account? <Link to='/signup'>Sign up</Link>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

const container = {
  backgroundColor: '#A1D1B6',
  fontFamily: 'Reenie Beanie',
  width: '100vw',
  height: '100vh',
  flexGrow: '1',
};

const buttonStyle = {
  color: 'black',
  fontSize: 16,
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 216, 99, 0.87)',
  fontFamily: 'Reenie Beanie',
};
