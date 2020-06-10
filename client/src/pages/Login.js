import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import chirpy from './chirpy.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container style={container}>
        <Grid item xs={3}>
          Username
        </Grid>
        <Grid item xs={3}>
          Password
        </Grid>
        <Button style={buttonStyle} variant='contained' color='primary'>
          Login
        </Button>
        <a href='#'>No account? Sign up!</a>
      </Grid>
    </div>
  );
}

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100vh',
  //position: 'absolute',
  display: 'flex',
  justify: 'center',
  direction: 'column',
  alignItems: 'center',
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
};

const buttonStyle = {
  color: 'black',
  fontSize: 16,
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 216, 99, 0.87)',
  fontFamily: 'Reenie Beanie',
};
