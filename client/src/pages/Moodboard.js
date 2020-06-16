import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import {
  Grid,
  Paper,
  Box,
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AlertBar from '../components/AlertBar';
import chirpy from '../assets/chirpy.svg';
import happy from '../assets/happy.svg';
import angry from '../assets/angry.svg';
import anxious from '../assets/anxious.svg';
import loved from '../assets/loved.svg';
import sad from '../assets/sad.svg';
import API from '../utils/API.js';
import userAPI from '../utils/userAPI';
import Buttons from '../components/Button.js';

const Dashboard = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState('');
  const { username } = JSON.parse(localStorage.getItem('user'));
  // error alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: '', type: '' });

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
      API.createPost({ post: post, mood: mood, sent: true })
        .then((res) => handleSuccessAlert('Post sent!'))
        .then(() => {
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
      API.createPost({ post: post, mood: mood, sent: false })
        .then((res) => handleSuccessAlert('Post saved!'))
        .then(() => {
          setPost('');
          loadPosts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLogout = async () => {
    try {
      await userAPI.logoutUser();
      window.location.replace('/');
    } catch (err) {
      throw err;
    }
  };

  const loadPosts = async () => {
    try {
      console.log('loadPosts');
      const allPosts = await API.getPost();
      setPosts(allPosts.data.reverse());
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Grid
      container
      style={container}
      justify='center'
      alignItems='center'
      direction='column'
      position='absolute'
    >
      <Grid item>
        <h3 style={{ margin: 0, textAlign: 'center' }}>Hello, {username}!</h3>
        <h4 style={{ margin: 0, textAlign: 'center' }}>
          How are you feeling today?
          <img src={chirpy} alt='chirpy the bird' style={chirpyStyle} />
        </h4>
      </Grid>

      <Grid item style={{ textAlign: 'center' }}>
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
            style={{ border: 0, margin: '8px', borderRadius: '42px' }}
          >
            <img src={sad} alt='sad emoji' />
          </ToggleButton>
        </ToggleButtonGroup>
        <Grid item />

        <Paper elevation={3} style={{ borderRadius: '10px' }}>
          <TextField
            style={{
              margin: '10px',
              backgroundColor: 'white',
              width: '320px',
            }}
            id='outlined-multiline-static'
            multiline
            rows={6}
            variant='outlined'
            onChange={handleInputChange}
            value={post}
            InputProps={{
              style: {
                fontFamily: 'Rosarivo',
              },
            }}
          ></TextField>
        </Paper>
      </Grid>

      <Grid item style={{ marginTop: '10px', marginBottom: '15px' }}>
        <Buttons onClick={handleKeepPost}>Keep</Buttons>
        <Buttons onClick={handleSendPost}>Send</Buttons>
        <Buttons onClick={handleLogout}>Logout</Buttons>
      </Grid>

      <Grid item style={{ fontSize: '1em', marginBottom: '5px' }}>
        {posts.length ? (
          <Box component='div' style={{ height: '330px' }} overflow='auto'>
            {posts.map((post) => {
              return (
                <ExpansionPanel
                  style={{
                    width: '320px',
                    fontSize: '14px',
                    fontFamily: 'Rosarivo',
                  }}
                  key={post._id}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Moment
                      style={{ marginRight: '140px' }}
                      format='MM/DD/YYYY'
                    >
                      {post.date}
                    </Moment>

                    {post.mood}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>{post.post}</ExpansionPanelDetails>
                </ExpansionPanel>
              );
            })}
          </Box>
        ) : (
          <h3>You don't have any posts yet!</h3>
        )}
      </Grid>
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
  height: '90vh',
  flexGrow: '1',
  fontFamily: 'Reenie Beanie',
  fontSize: '18px',
};

const chirpyStyle = {
  width: '1em',
  height: '1em',
  marginLeft: '5px',
};
