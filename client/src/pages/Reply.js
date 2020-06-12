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
    borderRadius: '10px',
    fontFamily: 'Reenie Beanie',
  }
}
const Reply = () => {
  // post is single rendered post
  const [post, setPost] = useState({});
  // posts is all posts from db (filtered)
  const [posts, setPosts] = useState([]);

  const renderRandomPost = () => {
    // if there is a post, then remove it when shuffling
    // if (post.length) {
    //   posts.filter((p) => p._id === post._id);
    // }
    const randomIndex = Math.floor(Math.random() * posts.length) || 0;
    setPost(posts[randomIndex]);
  }

  // gets all posts, filtered to include only
  // ones that are sent & ones without a response
  const filterPosts = async () => {
    try{
      const { data } = await API.getPost();
      console.log(data);
      const allPosts = data.reverse().filter((post) => {
        return (post.sent === true && !post.reply); // post.sent === true && !post.reply
      });
      console.log('filtered posts', allPosts);
      setPosts(allPosts);
      renderRandomPost();
    } catch(err) {
      throw err;
    }
  }

  const handleNextButtonClick = (event) => {
    event.preventDefault();
    renderRandomPost();
  }

  useEffect(() => {
    filterPosts();
  },[]);

  return (
    <Grid container style={styles.container}>
      <Grid item sm={4} />
      <Grid item sm={4}>
        <PostCard post={post} renderRandomPost={renderRandomPost}/>
        <Button variant='contained' onClick={handleNextButtonClick} style={styles.nextButton}>shuffle</Button>
      </Grid>
      <Grid item sm={4} />
    </Grid>
  );
}

export default Reply;