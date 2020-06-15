import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import {
  Grid,
  Box,
  Button,
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import chirpy from '../assets/chirpy.svg';
import happy from '../assets/happy.svg';
import angry from '../assets/angry.svg';
import anxious from '../assets/anxious.svg';
import loved from '../assets/loved.svg';
import sad from '../assets/sad.svg';

import API from '../utils/API.js';
import userAPI from '../utils/userAPI';

const Dashboard = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState('');
  const { username } = JSON.parse(localStorage.getItem('user'));

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPost(value);
  };

  const handleMoodChange = (event, newMood) => {
    setMood(newMood);
  };

  const handleSendPost = (event) => {
    event.preventDefault();

    API.createPost({ post: post, mood: mood, sent: true })
      .then((res) => alert('Post sent!'))
      .then(() => setPost(''))
      .catch((err) => console.log(err));
  };

  const handleKeepPost = (event) => {
    event.preventDefault();

    API.createPost({ post: post, mood: mood, sent: false })
      .then((res) => alert('Post saved!'))
      .then(() => setPost(''))
      .catch((err) => console.log(err));
  };

  const handleLogout = async () => {
    try {
      await userAPI.logoutUser();
      window.location.replace('/login');
    } catch (err) {
      throw err;
    }
  };

  const loadPosts = async () => {
    try {
      const allPosts = await API.getPost();
      setPosts(allPosts.data.reverse());
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    loadPosts();
  }, [posts]);

  return (
    <Grid
      container
      style={container}
      justify="center"
      alignItems="center"
      direction="column"
      position="absolute"
    >
      <Grid item>
        <h3>
          Hello, {username}! How are you feeling today?
          <img src={chirpy} alt="chirpy the bird" style={chirpyStyle} />
        </h3>
      </Grid>

      <Grid item>
        <ToggleButtonGroup
          value={mood}
          exclusive
          onChange={handleMoodChange}
          aria-label="moods"
        >
          <ToggleButton
            value="happy"
            aria-label="happy"
            style={{ border: 0, marginRight: '16px' }}
          >
            <img src={happy} alt="happy emoji" />
          </ToggleButton>
          <ToggleButton
            value="Angry"
            aria-label="angry"
            style={{ border: 0, marginRight: '16px' }}
          >
            <img src={angry} alt="angry emoji" />
          </ToggleButton>
          <ToggleButton
            value="Anxious"
            aria-label="anxious"
            style={{ border: 0, marginLeft: '16px', marginRight: '16px' }}
          >
            <img src={anxious} alt="anxious emoji" />
          </ToggleButton>
          <ToggleButton
            value="Loved"
            aria-label="loved"
            style={{ border: 0, marginLeft: '16px', marginRight: '16px' }}
          >
            <img src={loved} alt="loved emoji" />
          </ToggleButton>
          <ToggleButton
            value="Sad"
            aria-label="sad"
            style={{ border: 0, marginLeft: '16px' }}
          >
            <img src={sad} alt="sad emoji" />
          </ToggleButton>
        </ToggleButtonGroup>

        <Grid item />
        <TextField
          style={{
            marginBottom: '10px',
            backgroundColor: 'white',
            width: '320px',
          }}
          id="outlined-multiline-static"
          multiline
          rows={6}
          variant="outlined"
          onChange={handleInputChange}
          value={post}
        ></TextField>
      </Grid>

      <Grid item style={{ marginBottom: '15px' }}>
        <Button
          onClick={handleKeepPost}
          style={buttonStyle}
          variant="contained"
          color="primary"
        >
          Keep
        </Button>
        <Button
          onClick={handleSendPost}
          style={buttonStyle}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
        <Button
          style={buttonStyle}
          variant="contained"
          color="primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Grid>

      <Grid item style={{ marginBottom: '5px' }}>
        {posts.length ? (
          <Box component="div" style={{ height: '330px' }} overflow="auto">
            {posts.map((post) => {
              return (
                <ExpansionPanel style={{ width: '320px' }} key={post._id}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Moment
                      style={{ marginRight: '180px' }}
                      format="MM/DD/YYYY"
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
  fontsize: '3em',
};

const chirpyStyle = {
  width: '1em',
  height: '1em',
};

const buttonStyle = {
  color: 'black',
  fontSize: 16,
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 216, 99, 0.87)',
  fontFamily: 'Reenie Beanie',
  marginLeft: '5px',
  marginRight: '5px',
};
