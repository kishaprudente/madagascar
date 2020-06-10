import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
//import { flexbox } from '@material-ui/system';
import chirpy from './chirpy.svg';

const quote = '"If you can be anything in the world, be kind."';

export default function Landing() {
  return (
    <Container fluid maxWidth='sm'>
      <Box style={container}>
        <h2 style={logoStyle}>chirrup!</h2>
        <img style={chirpyStyle} src={chirpy} alt='chirpy the bird' />
        <Box style={quoteStyle}>{quote}</Box>
      </Box>
    </Container>
  );
}

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
};

const logoStyle = {
  position: 'absolute',
  width: '30%',
  height: '32px',
  left: '30%',
  right: '30%',
  top: '88px',
  fontFamily: 'Ruluko',
  fontSize: '3em',
  lineHeight: '51px',
  textAlign: 'center',
  color: '#4F4F4F',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const chirpyStyle = {
  position: 'absolute',
  top: '185px',
  textAlign: 'center',
  left: '40%',
  right: '40%',
  width: '4em',
  height: '4em',
};

const quoteStyle = {
  position: 'absolute',
  top: '282px',
  left: '30%',
  right: '30%',
  textAlign: 'center',
  fontFamily: 'Reenie Beanie',
  fontSize: '2em',
  lineHeight: '141%',
};
