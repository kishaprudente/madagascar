import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import API from '../utils/API';
import Buttons from '../components/Button.js';

const Inbox = () => {
  const [replies, setReplies] = useState([]);
  const [reply, setReply] = useState('');

  const getReplies = async () => {
    try {
      const { data } = await API.getReplies();
      const reversedOrder = [...data.reverse()];
      setReplies(reversedOrder);
      setReply(reversedOrder[0].response);
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
          A little birdy told me...
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
      <Grid item style={{ margin: '10px' }}>
        <Buttons>next</Buttons>
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
