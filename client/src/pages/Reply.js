import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ReplyAccordion from '../components/ReplyAccordion';
import CircularProgress from '@material-ui/core/CircularProgress';

import API from '../utils/API';

const styles = {
  container: {
    background: '#A1D1B6',
    paddingBottom: '60px',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    fontFamily: 'Reenie Beanie',
    display: 'flex',
    padding: '0.5em',
  },
};

const Reply = () => {
  // posts is all posts from db (filtered)
  const [posts, setPosts] = useState([]);
  // loading
  const [loading, setLoading] = useState(true);
  // user reply
  const [reply, setReply] = useState({});
  // expanded accordion
  const [expanded, setExpanded] = useState('');

  const getUserID = () => {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    return _id;
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
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };

  const handleInputChange = (event, postId) => {
    setReply({ response: event.target.value, post: postId });
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setReply('');
    setExpanded(newExpanded ? panel : false);
  };

  const handleSendReply = async (postId) => {
    try {
      // send reply to db, creates reply & updates post with reply id
      await API.replyPost({
        ...reply,
        post: postId,
      });
      // setAlertOpen(true);
      // remove the post that was just replied to
      // setPosts(posts.filter((p) => postId !== p._id));
      setReply({});
      setLoading(true);
      setExpanded('');
      await filterPosts();
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    filterPosts();
  }, []);

  return (
    <Grid container justify='center' style={styles.container}>
      <Grid item xs={10} sm={11}>
        <Typography style={styles.header} variant='h2'>
          Reply
        </Typography>
      </Grid>
      {loading ? (
        <Grid item xs={12}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </div>
        </Grid>
      ) : (
        posts.map((post) => (
          <Grid key={post._id} item xs={11} sm={10}>
            <ReplyAccordion
              post={post}
              input={reply.response}
              handleInputChange={handleInputChange}
              expanded={expanded}
              handleChange={handleChange}
              handleSendReply={handleSendReply}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Reply;
