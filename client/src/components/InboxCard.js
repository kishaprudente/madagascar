import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Typography,
    Avatar
  } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import chirpy from '../assets/chirpy.svg';

const InboxCard = ({ post, response }) => {
  return (
    <Card style={styles.root}>
      <CardContent>
        <Typography variant='h5' style={styles.text}>
          {post}
        </Typography>
        <Divider variant='middle'/>
        <Typography style={styles.text}>
        A little birdie told me...
        <img src={chirpy} alt='chirpy the bird' style={styles.chirpy}/> 
        </Typography>
        <Typography style={styles.text}>
        {response}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InboxCard;

const styles = {
  root: {
    margin: 10,
    radius: 4,
    effect: 'Drop Shadow',
  },
  text: {
    fontSize: '20px',
    fontFamily: 'Reenie Beanie',
    padding: '10px'
  },
  chirpy: {
    width: '1.5em',
    height: '1.5em',
  }
}
