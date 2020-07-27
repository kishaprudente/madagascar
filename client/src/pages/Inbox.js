import React, { useState, useEffect } from 'react';
import {
  Grid,
  Divider,
  Typography
} from '@material-ui/core';
import userAPI from '../utils/userAPI';
import InboxCard from '../components/InboxCard.js'

const Inbox = () => {
  const [replies, setReplies] = useState([]);
  const [reply, setReply] = useState('');

  const getUserID = () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    return id;
  };

  const getReplies = async () => {
    try {
      // get user data populated with replies
      // put replies in array and then in state
      const { data } = await userAPI.getUserData(getUserID());
      console.log(data);
      const allUserPosts = data.posts;
      const sentUserPosts = allUserPosts.filter(
        (p) => p.sent === true && p.reply
      );
      const allUserReplies = sentUserPosts.map((p) => p.reply);
      setReplies(allUserReplies.reverse());
      if (!allUserReplies) {
        return;
      } else {
        setReply(allUserReplies[0].response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInboxClick = (event) => {
    const clickedReply = replies.filter(
      (r) => r.response === event.target.innerHTML
    );
    setReply(clickedReply[0].response);
  };

  useEffect(() => {
    getReplies();
  }, []);

  return (
    <Grid
      container
      // alignItems='center'
      style={{ background: '#A1D1B6', height: '90vh', justifyContent: 'center', fontFamily: 'Rosarivo' }}
    >
      <Grid item xs={10} sm={11}>
          <Typography style={{ fontFamily: 'Reenie Beanie', display: 'flex', padding: '40px'}} variant='h3'>
            Inbox
          </Typography>
      </Grid>
      
      <InboxCard>
     {replies.length ? (
      replies.map((reply, index) => (
        <Grid item xs={11} key={reply._id}>
          // <InboxCard
            response={reply.response}
          />
          {index !== replies.length - 1 ? <Divider /> : null}
        </Grid>
      ))
      ) : (
      <Grid item xs={11} alignItems='center'>
          <Typography style= {{fontFamily: 'Reenie Beanie', marginBottom: '150px', padding: '40px'}} variant='h4'>
            Nothing to show
          </Typography>
      </Grid>
      )}
      </InboxCard> 
      
    </Grid>
  );
};

export default Inbox;
