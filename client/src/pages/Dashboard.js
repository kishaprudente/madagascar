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
//import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import API from '../utils/API.js';
import chirpy from '../assets/chirpy.svg';

const Dashboard = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPost(value);
  };

  const loadPosts = async () => {
    try {
      const allPosts = await API.getPost();
      setPosts(allPosts.data);
      console.log(allPosts.data);
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
    >
      <Grid item />

      <Grid item>
        <h3>
          How are you feeling today?
          <img src={chirpy} alt='chirpy the bird' style={chirpyStyle} />
        </h3>
      </Grid>

      <Grid item>
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
        ></TextField>
      </Grid>

      <Grid item style={{ marginBottom: '30px' }}>
        <Button style={buttonStyle} variant='contained' color='primary'>
          Keep
        </Button>
        <Button style={buttonStyle} variant='contained' color='primary'>
          Send
        </Button>
      </Grid>

      <Grid item style={{ marginLeft: '20px', marginRight: '20px' }}>
        {posts.length ? (
          <Box component='div' style={{ height: '380px' }} overflow='auto'>
            {posts.map((post) => {
              return (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    key={post.id}
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
  marginLeft: '10px',
};
