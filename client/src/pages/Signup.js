import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import chirpy from '../assets/chirpy.svg';

export default function Signup() {
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
          id='outlined-size-normal'
          defaultValue='Username'
          variant='outlined'
        ></TextField>
        <TextField
          style={{ marginBottom: '10px' }}
          label='Password'
          id='outlined-size-normal'
          defaultValue='Password'
          variant='outlined'
        ></TextField>
        <TextField
          style={{ marginBottom: '10px' }}
          label='Confirm Password'
          id='outlined-size-normal'
          defaultValue='Password'
          variant='outlined'
        ></TextField>
      </Grid>

      <Grid item>
        <Button style={buttonStyle} variant='contained' color='primary'>
          Sign Up
        </Button>
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
