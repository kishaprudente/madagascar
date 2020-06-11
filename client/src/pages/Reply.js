import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import PostCard from '../components/PostCard';
import API from '../utils/API';

const styles = {
  container: {
    background: '#A1D1B6',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  nextButton: {
    background: 'rgba(255, 216, 99, 0.87)',
    postion: 'relative',
    display: 'block',
    margin: '0 auto',
    bottom: '100px',
    borderRadius: '10px'
  }
}
const Reply = () => {
  // post is single rendered post
  const [post, setPost] = useState({});
  // posts is all posts from db (filtered)
  const [posts, setPosts] = useState([]);

  const noPost = { post: 'No more posts at this time. Check back later!' }

  return (
    <Grid container style={styles.container}>
      <Grid item sm={4} />
      <Grid item sm={4}>
        <PostCard />
        <Button variant='contained' style={styles.nextButton}>next</Button>
      </Grid>
      <Grid item sm={4} />
    </Grid>
  );
}

export default Reply;