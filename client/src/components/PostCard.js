/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, TextField } from '@material-ui/core';
import LayeredPages from '../assets/LayeredPages.svg';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AlertBar from './AlertBar';
import API from '../utils/API';
import Buttons from './Button.js';

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
}));

const styles = {
  svg: {
    paddingTop: '50px',
    position: 'relative',
  },
  paper: {
    background: '#F2F2F2',
    position: 'relative',
    width: '290px',
    height: '100px',
    left: '50px',
    bottom: '190px',
    zIndex: '1200',
    fontFamily: 'Rosarivo',
  },
  replyButton: {
    position: 'relative',
    bottom: '180px',
    borderRadius: '10px',
  },
};

const PostCard = ({ post, posts, setPost, setPosts, renderNextPost }) => {
  const classes = useStyles();
  // modal open state
  const [open, setOpen] = useState(false);
  // alert open state
  const [alertOpen, setAlertOpen] = useState(false);
  const [reply, setReply] = useState({ response: '' });

  useEffect(() => {
    renderNextPost();
  }, [posts]);

  const handleInputChange = (event) => {
    setReply({ response: event.target.value, post: post._id });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // close all
    setAlertOpen(false);
    setOpen(false);
    setReply({ response: '' });
  };

  const handleSendReply = async () => {
    try {
      // send reply to db, creates reply & updates post with reply id
      await API.replyPost({
        ...reply,
        post: post._id,
      });
      setAlertOpen(true);
      // remove the post that was just replied to
      setPosts(posts.filter((p) => post._id !== p._id));
      setPost({});
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <Container style={styles.container}>
        <Box
          component='img'
          src={LayeredPages}
          alt='background'
          style={styles.svg}
        />
        <Box style={styles.paper} overflow='auto' whiteSpace='normal'>
          {post
            ? post.post
            : 'There are no new posts! Click refresh to try again!'}
        </Box>
        <Grid item style={{ position: 'relative', bottom: '180px' }}>
          <Buttons onClick={handleOpen} disabled={post ? false : true}>
            reply
          </Buttons>
        </Grid>
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
              value={reply.response}
              onChange={handleInputChange}
              style={{ width: '100%' }}
              InputProps={{
                style: {
                  fontFamily: 'Rosarivo',
                },
              }}
            />
            <Buttons onClick={handleSendReply}>Send</Buttons>
          </div>
        </Fade>
      </Modal>
      <AlertBar
        message='Sent~'
        type='success'
        openState={alertOpen}
        onClose={handleCloseAlert}
      />
    </div>
  );
};

export default PostCard;
