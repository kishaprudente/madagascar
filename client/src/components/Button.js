import React from 'react';
import { Button } from '@material-ui/core';

const Buttons = (props) => {
  return (
    <Button
      style={buttonStyle}
      variant='contained'
      color='primary'
      {...props}
    />
  );
};

export default Buttons;

const buttonStyle = {
  color: 'black',
  fontSize: 16,
  //border: '1px solid',
  lineHeight: 1.5,
  background: '#ffe259' /* fallback for old browsers */,
  background:
    '-webkit-linear-gradient(to left, #ffa751, #ffe259)' /* Chrome 10-25, Safari 5.1-6 */,
  background:
    'linear-gradient(to left, #ffa751, #ffe259)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

  fontFamily: 'Ruluko',
  marginLeft: '5px',
  marginRight: '5px',
};