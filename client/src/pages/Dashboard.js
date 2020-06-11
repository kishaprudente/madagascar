import React, { useState, useEffect } from 'react';
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
import BottomNav from '../components/BottomNav';

const Dashboard = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPost(value); //mood will be changed once implememted in textfield
  };

  const handleSendPost = (event) => {
    event.preventDefault();

    API.createPost({ post: post, mood: 'Happy', sent: true })
      .then((res) => alert('Post sent!'))
      .then(() => setPost(''))
      .catch((err) => console.log(err));
  };

  const handleKeepPost = (event) => {
    event.preventDefault();

    API.createPost({ post: post, mood: 'Happy', sent: false })
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
      position='fixed'
    >
      <Grid item />

      <Grid item>
        <h3>
          How are you feeling today?
          <img src={chirpy} alt='chirpy the bird' style={chirpyStyle} />
        </h3>
      </Grid>

      <Grid item>
        <Button value='happy'>
          <img src={happy} alt='happy emoji' />
        </Button>
        <Button value='angry'>
          <img src={angry} alt='angry emoji' />
        </Button>
        <Button value='anxious'>
          <img src={anxious} alt='anxious emoji' />
        </Button>
        <Button value='loved'>
          <img src={loved} alt='loved emoji' />
        </Button>
        <Button value='sad'>
          <img src={sad} alt='sad emoji' />
        </Button>
        <Grid item />
        <TextField
          style={{
            marginBottom: '10px',
            backgroundColor: 'white',
            width: '300px',
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

      <Grid item style={{ marginLeft: '20px', marginRight: '20px' }}>
        {posts.length ? (
          <Box component='div' style={{ height: '330px' }} overflow='auto'>
            {posts.map((post) => {
              return (
                <ExpansionPanel key={post._id}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    {post.date}
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
      <Grid item style={{ margin: '5px' }}></Grid>
      <BottomNav />
    </Grid>
  );
};

export default Dashboard;

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100vh',
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
