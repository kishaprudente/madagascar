import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import API from '../utils/API';
import userAPI from '../utils/userAPI';

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
      const allUserPosts = data.posts;
      const sentUserPosts = allUserPosts.filter(
        (p) => p.sent === true && p.reply
      );
      const allUserReplies = sentUserPosts.map((p) => p.reply);
      setReplies(allUserReplies.reverse());
      setReply(allUserReplies[0].response);
    } catch (err) {
      throw err;
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
      direction='column'
      alignItems='center'
      style={{ background: '#A1D1B6', height: '90vh', fontFamily: 'Rosarivo' }}
    >
      <Grid item>
        <h3 style={{ fontFamily: 'Reenie Beanie' }}>
          A little birdy told me and these are the replies you got:
        </h3>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ borderRadius: '10px' }}>
          <Box
            component='div'
            overflow='auto'
            style={{ padding: '20px', height: '270px', width: '250px' }}
          >
            {reply ? (
              <p>{reply}</p>
            ) : (
              <p>You have not received any responses yet!</p>
            )}
          </Box>
        </Paper>
      </Grid>
      <Grid item>
        <Button
          variant='outlined'
          style={{
            background: 'rgba(255, 216, 99, 0.87)',
            margin: '20px',
            fontFamily: 'Reenie Beanie',
          }}
        >
          next
        </Button>
      </Grid>
      <Grid item>
        <div
          style={{
            maxHeight: '250px',
            width: '350px',
            background: '#F2F2F2',
            borderRadius: '10px',
            overflow: 'auto',
          }}
        >
          <List component='nav' aria-label='inbox'>
            {replies.length ? (
              replies.map((reply, index) => (
                <React.Fragment key={reply._id}>
                  <ListItem button>
                    <ListItemText
                      style={{
                        textAlign: 'center',
                        maxHeight: '50px',
                      }}
                      onClick={handleInboxClick}
                      primary={reply.response}
                      primaryTypographyProps={{
                        style: {
                          display: 'block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontFamily: 'Rosarivo',
                        },
                      }}
                    />
                  </ListItem>
                  {index !== replies.length - 1 ? <Divider /> : null}
                </React.Fragment>
              ))
            ) : (
              <ListItem>
                <ListItemText
                  inset
                  primary='Nothing to show!'
                  primaryTypographyProps={{
                    style: { fontFamily: 'Rosarivo' },
                  }}
                />
              </ListItem>
            )}
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

export default Inbox;
