import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Grid, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Buttons from '../components/Button.js';
import AlertBar from '../components/AlertBar';
import chirpy from '../assets/chirpy.svg';
import userAPI from '../utils/userAPI';
import { useAuth } from '../utils/authContext';

export default function Signup() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirm: '',
  });
  const { setAuthTokens, setCurrentUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/moodboard' } };
  // error alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: '', type: '' });

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

  const handleErrorAlert = (message) => {
    setAlertMessage({ message, type: 'error' });
    setAlertOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // close alert
    setAlertOpen(false);
  };

  const handleSignup = async () => {
    try {
      if (user.password !== user.confirm) {
        handleErrorAlert('Confirm Password must match Password');
      } else {
        const { username, password } = user;
        const signup = await userAPI.createUser({
          username: username,
          password: password,
        });
        console.log(signup);
        const { error, errors } = signup.data;
        if (error) {
          handleErrorAlert(error);
        } else if (errors) {
          const { message } = signup.data.errors.password.properties;
          handleErrorAlert(message);
        } else {
          setCurrentUser(signup.data.body);
          setAuthTokens(signup.data.token);
          history.replace(from);
        }
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
      <Grid item>
        <img src={chirpy} alt='chirpy the bird' />
      </Grid>

      <Grid item style={{ width: '200px' }}>
        <TextField
          style={{ marginBottom: '10px', width: '200px' }}
          label='Username'
          name='username'
          id='username'
          placeholder='Username'
          variant='outlined'
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          style={{ marginBottom: '10px' }}
          label='Password'
          name='password'
          type={show ? 'text' : 'password'}
          id='password'
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
        />
        <TextField
          style={{ marginBottom: '10px' }}
          label='Confirm Password'
          name='confirm'
          type={show ? 'text' : 'password'}
          id='confirm'
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
        />
      </Grid>
      <Grid item>
        <Buttons onClick={handleSignup}>Sign Up</Buttons>
      </Grid>
      <AlertBar
        message={alertMessage.message}
        type={alertMessage.type}
        openState={alertOpen}
        onClose={handleCloseAlert}
      />
      <Grid item>
        Already have an account? <Link to='/signin'>Sign In</Link>
      </Grid>
    </Grid>
  );
}

const container = {
  backgroundColor: '#A1D1B6',
  fontFamily: 'Reenie Beanie',
  width: '100vw',
  height: '94vh',
  flexGrow: '1',
};
