import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from './Alert';

// types: 'error, 'warning', 'info', 'success'
const AlertBar = ({ message, type, openState, onClose }) => {
  return (
    <Snackbar
      open={openState}
      autoHideDuration={2000}
      onClose={() => {
        onClose();
      }}
      style={{ bottom: 90 }}
    >
      <Alert
        onClose={() => {
          onClose();
        }}
        severity={type}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBar;
