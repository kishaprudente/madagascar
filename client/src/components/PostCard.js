import React, { useState, useEffect } from 'react';
import { Container, Box, Button, TextField } from '@material-ui/core';
import LayeredPages from '../assets/LayeredPages.svg';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AlertBar from './AlertBar';
import API from '../utils/API';

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
    fontFamily: 'Reenie Beanie',
  },
}));

const styles = {
  svg: {
    paddingTop: '100px',
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
    background: 'rgba(255, 216, 99, 0.87)',
    position: 'relative',
    left: '250px',
    bottom: '180px',
    borderRadius: '10px',
    fontFamily: 'Reenie Beanie',
  },
};

const PostCard = ({ post, posts, setPost, setPosts, renderNextPost }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
    renderNextPost();
  };

  const handleSendReply = async () => {
    try {
      // send reply to db
      const { data } = await API.replyPost(reply);
      // create new post object with reply id
      const newPost = { ...post, reply: data._id };
      // update post with reply id
      await API.updatePostResponse(post._id, newPost);
      // open success alert
      setAlertOpen(true);
      // remove the post that was just replied to
      setPost({});
      setPosts(posts.filter((p) => data._id !== p._id));
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
        <Button
          onClick={handleOpen}
          variant='contained'
          disabled={post ? false : true}
          style={styles.replyButton}
        >
          reply
        </Button>
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
            />
            <Button
              onClick={handleSendReply}
              variant='contained'
              className={classes.sendButton}
            >
              Send
            </Button>
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
