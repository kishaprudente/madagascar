import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import chirpy from '../assets/chirpy.svg';
import API from '../utils/API';

export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ [name]: value });
  };

  const handleLogin = async () => {
    try {
      const login = await API.loginUser({
        username: user.username,
        password: user.password,
      });
      console.log(login);
      alert('login successful');
      // window.location.replace('/dashboard');
    } catch (err) {
      throw err;
    }
  };

  return (
    <Grid
      container
      style={container}
      justify="space-evenly"
      alignItems="center"
      direction="column"
    >
      <Grid item />
      <Grid item>
        <img src={chirpy} alt="chirpy the bird" />
      </Grid>

      <Grid item style={{ width: '180px' }}>
        <TextField
          style={{ marginBottom: '10px' }}
          label="Username"
          name="username"
          id="outlined-size-normal"
          placeholder="Username"
          variant="outlined"
          onChange={(e) => handleInputChange(e)}
        ></TextField>
        <TextField
          style={{ marginBottom: '10px' }}
          label="Password"
          name="password"
          id="outlined-size-normal"
          placeholder="Password"
          variant="outlined"
          onChange={(e) => handleInputChange(e)}
        ></TextField>
      </Grid>

      <Grid item>
        <Button
          style={buttonStyle}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Grid>

      <Grid item>
        No account? <Link to="/signup">Sign up</Link>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100vh',
  flexGrow: '1',
};

// const chirpyStyle = {
//   top: '185px',
//   textAlign: 'center',
//   left: '40%',
//   right: '40%',
//   width: '4em',
//   height: '4em',
// };

const buttonStyle = {
  color: 'black',
  fontSize: 16,
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 216, 99, 0.87)',
  fontFamily: 'Reenie Beanie',
};
