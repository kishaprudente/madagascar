import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Typography,
  } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import chirpy from '../assets/chirpy.svg';


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    height: 197,
    margin: 40,
    radius: 4,
    effect: 'Drop Shadow',
  },
  pos: {
    marginBottom: 12,
    marginTop: 12,
    fontSize: '18px',
    fontFamily: 'Reenie Beanie'
  },
  post: {
    fontSize: '18px',
    fontFamily: 'Reenie Beanie'
  },
  reply: {
    fontSize: '18px',
    fontFamily: 'Reenie Beanie'
  },

});

const InboxCard = ({response}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.post}>
        {/* {post} */}
        Sed aliquam quis semper aliquet dui, nulla lacus eu dolor
        </Typography>
        <Divider />
        <Typography className={classes.pos}>
        <img src={chirpy} alt='chirpy the bird' style={chirpyStyle}/> A little birdie told me...
        </Typography>
        <Typography className={classes.reply}>
        {response}
        {/* Hello! Tellus nisl mollis suscipit morbi adipiscing ut nunc, curabitur nulla */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InboxCard;

const chirpyStyle = {
  width: '1em',
  height: '1em',
  marginLeft: '5px',
};
