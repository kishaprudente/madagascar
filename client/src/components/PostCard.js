import React, { useState, useEffect } from 'react';
import { Container, Box, Button, TextField } from '@material-ui/core';
import LayeredPages from '../assets/LayeredPages.svg';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#F2F2F2',
    borderRadius: '10px',
  },
  sendButton: {
    background: 'rgba(255, 216, 99, 0.87)',
    margin: '5px',
    float: 'right',
  }
}));

const styles = {
  svg: {
    paddingTop: '100px',
    position: 'relative',
  },
  paper: {
    background: '#F2F2F2',
    position: 'relative',
    maxWidth: '290px',
    maxHeight: '100px',
    left: '50px',
    bottom: '190px',
    zIndex: '1200'
  },
  replyButton: {
    background: 'rgba(255, 216, 99, 0.87)',
    position: 'relative',
    left: '250px',
    bottom: '180px',
    borderRadius: '10px',
  },
}

const PostCard = ({post, renderRandomPost}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [reply, setReply] = useState('');

  useEffect(() => {
    renderRandomPost();
  });

  const handleInputChange = (event) => {
    setReply(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAlert = () => {
    setAlertOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // close all
    setAlertOpen(false);
    setOpen(false);
    setReply('');
  };

  return (
    <div>
      <Container style={styles.container}>
        <Box component='img' src={LayeredPages} alt='background' style={styles.svg} />
        <Box style={styles.paper} overflow='auto' whiteSpace='normal'>
          {post ? (
            post.post 
          ) : (
            'There are currently no posts. Check back later!'
          )}
      </Box>
        <Button onClick={handleOpen} variant='contained' style={styles.replyButton}>reply</Button>
      </Container>
      <Modal
        aria-labelledby='reply-modal-title'
        aria-describedby='reply-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TextField
              id='reply-text'
              multiline
              rows={10}
              variant='outlined'
              value={reply}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
            <Button onClick={handleClickAlert} variant='contained' className={classes.sendButton}>Send</Button>
          </div>
        </Fade>
      </Modal>
      <Snackbar open={alertOpen} autoHideDuration={1000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity='success'>
          Sent~
        </Alert>
      </Snackbar>
    </div>
  );
}

export default PostCard;