import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import chirpy from '../assets/chirpy.svg';
import userAPI from '../utils/userAPI';

export default function Signup() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirm: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmitUser = async () => {
    try {
      if (user.password !== user.confirm) {
        throw new Error('Confirm Password must match Password');
      } else {
        const newUser = await userAPI.createUser({
          username: user.username,
          password: user.password,
          confirm: user.confirm,
        });
        console.log(newUser.config.data);
        window.location.replace('/dashboard');
      }
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
          type="password"
          id="outlined-size-normal"
          placeholder="Password"
          variant="outlined"
          onChange={(e) => handleInputChange(e)}
        ></TextField>
        <TextField
          style={{ marginBottom: '10px' }}
          label="Confirm Password"
          name="confirm"
          type="password"
          id="outlined-size-normal"
          placeholder="Confirm Password"
          variant="outlined"
          onChange={(e) => handleInputChange(e)}
        ></TextField>
      </Grid>

      <Grid item>
        <Button
          style={buttonStyle}
          variant="contained"
          color="primary"
          onClick={handleSubmitUser}
        >
          Sign Up
        </Button>
      </Grid>

      <Grid item>
        Already have an account? <Link to="/login">Login</Link>
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
