import React, { useState, useEffect } from 'react';
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

  // function to shuffle array values
  const shuffleArray = (array) => {
    for(let i = array.length-1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log(array);
    return array;
  }

  // gets all posts, filtered to include only
  // ones that are sent & ones without a response
  const filterPosts = async () => {
    try{
      const { data } = await API.getPost();
      console.log(data);
      const allPosts = data.reverse().filter((post) => {
        return (post.sent === true && post.replyid); //FIXME: !post.replyid
      });
      console.log('filtered posts', allPosts);
      setPosts(shuffleArray(allPosts));
      renderRandomPost();
    } catch(err) {
      throw err;
    }
  }

  useEffect(() => {
    filterPosts();
  },[]);

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