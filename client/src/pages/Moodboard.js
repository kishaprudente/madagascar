/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import AlertBar from '../components/AlertBar';
import chirpy from '../assets/chirpy.svg';
import happy from '../assets/happy.svg';
import angry from '../assets/angry.svg';
import anxious from '../assets/anxious.svg';
import loved from '../assets/loved.svg';
import sad from '../assets/sad.svg';
import API from '../utils/API.js';
import Buttons from '../components/Button.js';
import PageTitle from '../components/PageTitle';

const Dashboard = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState('');
  const [isMounted, setIsMounted] = useState(true); // note this flag denote mount status
  const { username } = JSON.parse(localStorage.getItem('user'));
  // error alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: '', type: '' });

  const getUserID = () => {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    return _id;
  };

  const handleErrorAlert = (message) => {
    setAlertMessage({ message, type: 'error' });
    setAlertOpen(true);
  };

  const handleSuccessAlert = (message) => {
    setAlertMessage({ message, type: 'success' });
    setAlertOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // close alert
    setAlertOpen(false);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPost(value);
  };

  const handleMoodChange = (event, newMood) => {
    setMood(newMood);
  };

  const handleSendPost = (event) => {
    event.preventDefault();

    if (!post && !mood) {
      handleErrorAlert('Sorry! Your post cannot be empty.');
    } else if (!post) {
      handleErrorAlert('Please enter text in your post.');
    } else if (!mood) {
      handleErrorAlert('Please select a mood for your post.');
    } else {
      API.createPost({ post: post, mood: mood, sent: true, user: getUserID() })
        .then((res) => handleSuccessAlert('Post sent!'))
        .then(() => {
          setMood('');
          setPost('');
          loadPosts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleKeepPost = (event) => {
    event.preventDefault();

    if (!post && !mood) {
      handleErrorAlert('Sorry! Your post cannot be empty.');
    } else if (!post) {
      handleErrorAlert('Please enter text in your post.');
    } else if (!mood) {
      handleErrorAlert('Please select a mood for your post.');
    } else {
      API.createPost({ post: post, mood: mood, sent: false, user: getUserID() })
        .then((res) => handleSuccessAlert('Post saved!'))
        .then(() => {
          setMood('');
          setPost('');
          loadPosts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const loadPosts = async () => {
    try {
      console.log('loadPosts');
      const allPosts = await API.getPost();
      const userPosts = allPosts.data.filter(
        (post) => post.user === getUserID()
      );
      if (isMounted) {
        setPosts(userPosts.reverse());
      }
      return setIsMounted(false);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    loadPosts();
  }, [isMounted, setPosts]);

  return (
    <Grid container style={container}>
      <Grid item xs={11} lg={10}>
        <PageTitle>Moodboard</PageTitle>
      </Grid>
      <Grid item style={{ textAlign: 'center' }}>
        <Typography variant='h4' style={{ fontFamily: 'Reenie Beanie' }}>
          Hello, {username}!
        </Typography>
        <Typography variant='h6' style={{ fontFamily: 'Ruluko' }}>
          How are you feeling today?
          <img src={chirpy} alt='chirpy the bird' style={chirpyStyle} />
        </Typography>
      </Grid>

      <Grid item xs={11} lg={10} style={{ textAlign: 'center' }}>
        <Card style={card}>
          <ToggleButtonGroup
            value={mood}
            exclusive
            onChange={handleMoodChange}
            aria-label='moods'
          >
            <ToggleButton
              value='Happy'
              aria-label='happy'
              style={{ border: 0, margin: '8px', borderRadius: '42px' }}
            >
              <img src={happy} alt='happy emoji' />
            </ToggleButton>
            <ToggleButton
              value='Angry'
              aria-label='angry'
              style={{ border: 0, margin: '8px', borderRadius: '42px' }}
            >
              <img src={angry} alt='angry emoji' />
            </ToggleButton>
            <ToggleButton
              value='Anxious'
              aria-label='anxious'
              style={{
                border: 0,

                margin: '8px',
                borderRadius: '42px',
              }}
            >
              <img src={anxious} alt='anxious emoji' />
            </ToggleButton>
            <ToggleButton
              value='Loved'
              aria-label='loved'
              style={{
                border: 0,

                margin: '8px',
                borderRadius: '42px',
              }}
            >
              <img src={loved} alt='loved emoji' />
            </ToggleButton>
            <ToggleButton
              value='Sad'
              aria-label='sad'
              style={{
                border: 0,
                margin: '8px',
                borderRadius: '42px',
              }}
            >
              <img src={sad} alt='sad emoji' />
            </ToggleButton>
          </ToggleButtonGroup>
          <Grid item />
          <CardContent>
            <TextField
              style={{
                backgroundColor: 'white',
                minWidth: '300px',
                fontFamily: 'Rosarivo',
              }}
              id='outlined-multiline-static'
              multiline
              rows={4}
              variant='outlined'
              onChange={handleInputChange}
              value={post}
            ></TextField>
          </CardContent>
          <CardActions>
            <Buttons onClick={handleKeepPost}>Keep</Buttons>
            <Buttons onClick={handleSendPost}>Send</Buttons>
          </CardActions>
        </Card>
      </Grid>

      {posts.length ? (
        <Box>
          {posts.map((post) => {
            return (
              <Grid item xs={11} lg={10} key={post._id}>
                <Paper
                  style={{
                    width: '332px',
                    fontSize: '14px',
                    fontFamily: 'Rosarivo',
                    borderRadius: '5px',
                  }}
                  key={post._id}
                >
                  <p style={p}>
                    <Moment
                      style={{ marginRight: '140px' }}
                      format='MM/DD/YYYY'
                    >
                      {post.date}
                    </Moment>
                    {post.mood}
                  </p>
                  <p style={p}>{post.post}</p>
                </Paper>
              </Grid>
            );
          })}
        </Box>
      ) : (
        <Typography
          variant='h6'
          style={{ fontFamily: 'Ruluko', marginTop: '5px' }}
        >
          You don't have any posts yet!
        </Typography>
      )}

      <AlertBar
        message={alertMessage.message}
        type={alertMessage.type}
        openState={alertOpen}
        onClose={handleCloseAlert}
      />
    </Grid>
  );
};

export default Dashboard;

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100%',
  fontFamily: 'Reenie Beanie',
  fontSize: '18px',
  marginTop: '75px',
  paddingBottom: '80px',
  overflow: 'auto',
  justifyContent: 'center',
};

const chirpyStyle = {
  width: '1em',
  height: '1em',
  marginLeft: '5px',
};

const card = {
  minWidth: '332px',
  margin: '5px',
  border: '1px solid #000000',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const p = {
  padding: '5px',
  margin: '5px',
};
