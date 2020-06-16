import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import chirpy from '../assets/chirpy.svg';
import userAPI from '../utils/userAPI';
import Buttons from '../components/Button.js';

export default function Signup() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirm: '',
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

  const handleSubmitUser = async () => {
    try {
      if (user.password !== user.confirm) {
        throw new Error('Confirm Password must match Password');
      } else {
        const newUser = await userAPI.createUser({
          username: user.username,
          password: user.password,
        });
        console.log('newUser', newUser);
        if (newUser.status === 200) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              username: newUser.data.username,
              id: newUser.data._id,
            })
          );
        }
        window.location.replace('/moodboard');
      }
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

      <Grid item style={{ width: '200px' }}>
        <TextField
          style={{ marginBottom: '10px', width: '200px' }}
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
          id='outlined-size-normal'
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
        <TextField
          style={{ marginBottom: '10px' }}
          label='Confirm Password'
          name='confirm'
          type={show ? 'text' : 'password'}
          id='outlined-size-normal'
          placeholder='Confirm Password'
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
        <Buttons onClick={handleSubmitUser}>Sign Up</Buttons>
      </Grid>

      <Grid item>
        Already have an account? <Link to='/login'>Login</Link>
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
