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
        <Typography component='p'>
        {/* {post} */}
        Sed aliquam quis semper aliquet dui, nulla lacus eu dolor
        </Typography>
        <Divider />
        <Typography className={classes.pos} color="textSecondary">
        A little birdie told me...
        </Typography>
        <Typography component="p">
        {/* {response} */}
        Hello! Tellus nisl mollis suscipit morbi adipiscing ut nunc, curabitur nulla
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InboxCard;