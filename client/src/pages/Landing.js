import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Box } from '@material-ui/core';
import chirpy from '../assets/chirpy.svg';

const quote = '"If you can be anything in the world, be kind."';

export default function Landing() {
  return (
    <Grid
      container
      style={container}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <h2 style={logoStyle}>chirrup!</h2>
      </Grid>
      <Grid item>
        <img style={chirpyStyle} src={chirpy} alt="chirpy the bird" />
      </Grid>
      <Grid item style={quoteStyle}>
        <Box style={{ width: '300px' }}>{quote}</Box>
      </Grid>
      <Grid item>
        <Button style={buttonStyle} variant="contained" color="primary">
          <Link to="/login">Let's chirp!</Link>
        </Button>
      </Grid>
    </Grid>
  );
}

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100vh',
  flewgrow: '1',
};

const logoStyle = {
  width: '30%',
  height: '32px',
  top: '88px',
  fontFamily: 'Ruluko',
  fontSize: '3em',
  lineHeight: '51px',
  textAlign: 'center',
  color: '#4F4F4F',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const chirpyStyle = {
  top: '185px',
  width: '4em',
  height: '4em',
};

const quoteStyle = {
  top: '282px',
  left: '30%',
  right: '30%',
  textAlign: 'center',
  fontFamily: 'Reenie Beanie',
  fontSize: '2em',
  lineHeight: '141%',
};

const buttonStyle = {
  width: '150px',
  color: 'black',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 216, 99, 0.87)',
  fontFamily: 'Reenie Beanie',
  margin: '7em',
};
