import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Typography,
  } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


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
    marginTop: 12
  },
});

const InboxCard = ({}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography component="p" style= {{fontFamily: 'Reenie Beanie'}}>
        {/* {post} */}
        Sed aliquam quis semper aliquet dui, nulla lacus eu dolor
        </Typography>
        <Divider />
        <Typography className={classes.pos} style= {{fontFamily: 'Reenie Beanie'}}>
        A little birdie told me...
        </Typography>
        <Typography component="p" style= {{fontFamily: 'Reenie Beanie'}}>
        {/* {response} */}
        Hello! Tellus nisl mollis suscipit morbi adipiscing ut nunc, curabitur nulla
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InboxCard;