import React from 'react';
import { Grid, Button } from '@material-ui/core';
import PostCard from '../components/PostCard';

const styles = {
  container: {
    background: '#A1D1B6',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  nextButton: {
    background: 'rgba(255, 216, 99, 0.87)',
    postion: 'relative',
    display: 'block',
    margin: '0 auto',
    bottom: '100px',
    borderRadius: '10px'
  }
}
const Reply = () => {
  return (
    <Grid container style={styles.container}>
      <Grid item sm={4}/>
      <Grid item sm={4}>
        <PostCard />
        <Button variant='contained' style={styles.nextButton}>next</Button>
      </Grid>
      <Grid item sm={4}/>
    </Grid>
  );
}

export default Reply;