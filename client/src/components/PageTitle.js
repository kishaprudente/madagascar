import React from 'react';
import { Typography } from '@material-ui/core';

const PageTitle = (props) => {
  return <Typography variant='h3' style={header} {...props}/ >
}

export default PageTitle;

const header = {
  fontFamily: 'Reenie Beanie',
  display: 'flex',
  paddingTop: '40px'
};
