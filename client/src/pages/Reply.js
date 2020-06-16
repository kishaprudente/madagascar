import React, { useState } from 'react';
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

  const getUserID = () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    return id;
  };

  // gets all posts, filtered to include only
  // ones that are sent & ones without a response & doesnt match user id
  // queue
  const filterPosts = async () => {
    try {
      const userID = getUserID();
      const { data } = await API.getPost();
      console.log(data);
      const allPosts = data.filter((post) => {
        return post.sent && !post.reply && post.user !== userID; // post.sent === true && !post.reply
      });
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
    <Grid container style={styles.container}>
      <Grid item sm={4} />
      <Grid item sm={4}>
        <PostCard
          post={post}
          posts={posts}
          setPost={setPost}
          setPosts={setPosts}
          renderNextPost={renderNextPost}
        />
        <Button
          variant='contained'
          onClick={post ? handleNextButtonClick : handleRefreshButtonClick}
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
