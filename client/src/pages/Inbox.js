import React from 'react';
import { Grid, Paper, Button, Box, List, ListItem, ListItemText, Divider } from '@material-ui/core';

const Inbox = () => {
  return (
    <Grid container direction='column' alignItems='center' style={{ background: '#A1D1B6', height: '100vh' }}>
      <Grid item>
        <h3>A little birdy told me...</h3>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ borderRadius: '10px' }}>
          <Box component='div' overflow='auto' style={{ padding: '10px', height: '300px', width: '250px' }}>
            <p>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            </p>
          </Box>
        </Paper>
      </Grid>
      <Grid item>
        <Button variant='outlined' style={{ background: 'rgba(255, 216, 99, 0.87)', margin: '20px' }}>next</Button>
      </Grid>
      <Grid item >
        <div style={{ maxHeight: '250px', width: '350px', background: '#F2F2F2', marginTop: '30px', borderRadius: '10px' }}>
          <List component='nav' aria-label='inbox'>
            <ListItem button>
              <ListItemText primary='Response 1' />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary='Response 2' />
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid >
  );
}

export default Inbox;