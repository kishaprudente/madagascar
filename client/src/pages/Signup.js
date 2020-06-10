import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import chirpy from './chirpy.svg';

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
        <a href='#'>Already have an account? Login!</a>
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

const chirpyStyle = {
  top: '185px',
  textAlign: 'center',
  left: '40%',
  right: '40%',
  width: '4em',
  height: '4em',
};

const buttonStyle = {
  color: 'black',
  fontSize: 16,
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 216, 99, 0.87)',
  fontFamily: 'Reenie Beanie',
};
