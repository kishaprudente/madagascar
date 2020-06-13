import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import PostCard from '../components/PostCard';
import API from '../utils/API';

const styles = {
  container: {
    background: '#A1D1B6',
    minHeight: '90vh',
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
  },
};
const Reply = () => {
  // post is single rendered post
  const [post, setPost] = useState({});
  // posts is all posts from db (filtered)
  const [posts, setPosts] = useState([]);

  const renderNextPost = () => {
    // TODO: never let a post render twice in a row
    if (post) {
      const nextIndex = posts.indexOf(post) + 1;
      setPost(posts[nextIndex]);
    } else {
      filterPosts();
      setPost(posts[0]);
    }
  };

  // gets all posts, filtered to include only
  // ones that are sent & ones without a response
  // queue
  const filterPosts = async () => {
    try {
      const { data } = await API.getPost();
      console.log(data);
      const allPosts = data.filter((post) => {
        return post.sent === true && !post.reply; // post.sent === true && !post.reply
      });
      console.log('filtered posts', allPosts);
      setPosts(allPosts);
      console.log('useeffect:', posts, 'post', post);
    } catch (err) {
      throw err;
    }
  };

  const handleNextButtonClick = (event) => {
    event.preventDefault();
    renderNextPost();
  };

  useEffect(() => {
    filterPosts();
  }, []);

  return (
    <Grid container style={styles.container}>
      <Grid item sm={4} />
      <Grid item sm={4}>
        <PostCard
          post={post}
          posts={posts}
          filterPosts={filterPosts}
          renderNextPost={renderNextPost}
        />
        <Button
          variant='contained'
          onClick={handleNextButtonClick}
          style={styles.nextButton}
        >
          {post ? 'next' : 'refresh'}
        </Button>
      </Grid>
      <Grid item sm={4} />
    </Grid>
  );
};

export default Reply;
