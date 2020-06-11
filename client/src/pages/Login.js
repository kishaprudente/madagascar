import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import chirpy from '../assets/chirpy.svg';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameRef = useRef();
  const passwordRef = useRef();

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
          id="outlined-size-normal"
          placeholder="Username"
          variant="outlined"
        ></TextField>
        <TextField
          style={{ marginBottom: '10px' }}
          label="Password"
          id="outlined-size-normal"
          placeholder="Password"
          variant="outlined"
        ></TextField>
      </Grid>

      <Grid item>
        <Button style={buttonStyle} variant="contained" color="primary">
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
