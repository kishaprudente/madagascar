import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PostCard from '../components/PostCard';
import API from '../utils/API';
import Buttons from '../components/Button.js';

const styles = {
  container: {
    background: '#A1D1B6',
    width: '100vw',
    minHeight: '90vh',
    justifyContent: 'center',
    textAlign: 'center',
  },
};

const Reply = () => {
  // post is single rendered post
  const [post, setPost] = useState({});
  // posts is all posts from db (filtered)
  const [posts, setPosts] = useState();

  const renderNextPost = () => {
    console.log('rendernextpost', posts);
    if (posts) {
      if (post) {
        const nextIndex = posts.indexOf(post) + 1;
        setPost(posts[nextIndex]);
      } else {
        setPost(posts[0]);
      }
    } else {
      filterPosts();
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
      console.log('allposts', allPosts);
      setPosts(allPosts);
    } catch (err) {
      throw err;
    }
  };

  const handleNextButtonClick = () => {
    renderNextPost();
  };

  const handleRefreshButtonClick = () => {
    filterPosts();
  };

  return (
    <Grid
      container
      style={styles.container}
      justify='center'
      alignItems='center'
      direction='column'
      position='absolute'
    >
      <Grid item>
        <h3
          style={{
            fontFamily: 'Reenie Beanie',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Send kindness!
        </h3>
      </Grid>
      <PostCard
        post={post}
        posts={posts}
        setPost={setPost}
        setPosts={setPosts}
        renderNextPost={renderNextPost}
      />
      <Buttons
        onClick={post ? handleNextButtonClick : handleRefreshButtonClick}
      >
        {post ? 'next' : 'refresh'}
      </Buttons>
    </Grid>
  );
};

export default Reply;
