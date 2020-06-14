import React, { useState, useEffect, useInput } from 'react';
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
import API from '../utils/API.js';
import chirpy from '../assets/chirpy.svg';
import happy from '../assets/happy.svg';
import angry from '../assets/angry.svg';
import anxious from '../assets/anxious.svg';
import loved from '../assets/loved.svg';
import sad from '../assets/sad.svg';

const Dashboard = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPost(value);
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
      justify='center'
      alignItems='center'
      direction='column'
      position='absolute'
    >
      {/* <Grid item /> */}

      <Grid item>
        <h3>
          How are you feeling today?
          <img src={chirpy} alt='chirpy the bird' style={chirpyStyle} />
        </h3>
      </Grid>

      <Grid item>
        <Button onClick={() => setMood('Happy')}>
          <img src={happy} alt='happy emoji' />
        </Button>
        <Button onClick={() => setMood('Angry')}>
          <img src={angry} alt='angry emoji' />
        </Button>
        <Button onClick={() => setMood('Anxious')}>
          <img src={anxious} alt='anxious emoji' />
        </Button>
        <Button onClick={() => setMood('Loved')}>
          <img src={loved} alt='loved emoji' />
        </Button>
        <Button onClick={() => setMood('Sad')}>
          <img src={sad} alt='sad emoji' />
        </Button>
        <Grid item />
        <TextField
          style={{
            marginBottom: '10px',
            backgroundColor: 'white',
            width: '320px',
          }}
          id='outlined-multiline-static'
          multiline
          rows={6}
          variant='outlined'
          onChange={handleInputChange}
          value={post}
        ></TextField>
      </Grid>

      <Grid item style={{ marginBottom: '15px' }}>
        <Button
          onClick={handleKeepPost}
          style={buttonStyle}
          variant='contained'
          color='primary'
        >
          Keep
        </Button>
        <Button
          onClick={handleSendPost}
          style={buttonStyle}
          variant='contained'
          color='primary'
        >
          Send
        </Button>
      </Grid>

      <Grid item style={{ marginBottom: '5px' }}>
        {posts.length ? (
          <Box component='div' style={{ height: '330px' }} overflow='auto'>
            {posts.map((post) => {
              return (
                <ExpansionPanel style={{ width: '320px' }} key={post._id}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Moment
                      style={{ marginRight: '180px' }}
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
