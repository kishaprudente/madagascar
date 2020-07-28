/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';
import userAPI from '../utils/userAPI';
import InboxCard from '../components/InboxCard.js'

const Inbox = () => {
  const [sentPosts, setSentPosts] = useState([]);
  const [isMounted, setIsMounted] = useState(true); // note this flag denote mount status
  // const [reply, setReply] = useState('');

  const getUserID = () => {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    return _id;
  };

  const getSentPosts = async () => {
    try {
      // get user data populated with replies
      // put replies in array and then in state
      const { data } = await userAPI.getUserData(getUserID());
      const allUserPosts = data.posts;
      const sentUserPosts = allUserPosts.filter(
        (p) => p.sent === true && p.reply
      );
      if (isMounted) {
        setSentPosts(sentUserPosts);
      }
      return setIsMounted(false)
      // const allUserReplies = sentUserPosts.map((p) => p.reply);
      // if (!allUserReplies) {
      //   return;
      // } else {
      //   setReply(allUserReplies[0].response);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  // const handleInboxClick = (event) => {
  //   const clickedReply = replies.filter(
  //     (r) => r.response === event.target.innerHTML
  //   );
  //   setReply(clickedReply[0].response);
  // };

  useEffect(() => {
    getSentPosts();
  }, [isMounted, sentPosts]);

  return (
    <Grid
      container
      style={styles.container}
    >
      <Grid item xs={10} sm={11}>
          <Typography style={styles.header} variant='h2'>
            Inbox
          </Typography>
      </Grid>
     {sentPosts.length ? (
      sentPosts.map((sentPost, index) => (
        <Grid item xs={11} sm={8} key={sentPost._id}>
          <InboxCard
            post={sentPost.post}
            response={sentPost.reply.response}
          />
        </Grid>
      ))
      ) : (
      <Grid item xs={11}>
          <Typography style= {styles.nothing} variant='h4'>
            Nothing to show
          </Typography>
      </Grid>
      )}
    </Grid>
  );
};

export default Inbox;

const styles = {
  container: {
    background: '#A1D1B6',
    paddingBottom: '60px',
    height: '100%',
    justifyContent: 'center'
  },
  header: {
    fontFamily: 'Reenie Beanie',
    display: 'flex',
    padding: '0.5em'
  },
  nothing: {
    fontFamily: 'Reenie Beanie',
    marginBottom: '150px',
    padding: '40px'
  }
}
