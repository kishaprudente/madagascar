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

const Inbox = () => {
  const [replies, setReplies] = useState([]);
  const [latestReply, setLatestReply] = useState('');

  const getReplies = async () => {
    try {
      const { data } = await API.getReplies();
      const reversedOrder = [...data.reverse()];
      setReplies(reversedOrder);
      setLatestReply(reversedOrder[0].response);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getReplies();
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ background: '#A1D1B6', height: '90vh' }}
    >
      <Grid item>
        <h3>A little birdy told me...</h3>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ borderRadius: '10px' }}>
          <Box
            component="div"
            overflow="auto"
            style={{ padding: '20px', height: '300px', width: '250px' }}
          >
            {latestReply.length ? (
              <p>{latestReply}</p>
            ) : (
              <p>You have not received any responses yet!</p>
            )}
          </Box>
        </Paper>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          style={{ background: 'rgba(255, 216, 99, 0.87)', margin: '20px' }}
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
            marginTop: '30px',
            borderRadius: '10px',
          }}
        >
          <List component="nav" aria-label="inbox">
            {replies.length ? (
              replies.map((reply) => (
                <ListItem button key={reply._id}>
                  <ListItemText inset primary={reply.response} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText inset primary="Nothing to show!" />
              </ListItem>
            )}
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

export default Inbox;
