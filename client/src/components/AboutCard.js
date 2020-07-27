import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 5
  },
  title: {
    fontFamily: 'Reenie Beanie'
  },
  body: {
    fontSize: '14px', 
    fontFamily: 'Reenie Beanie'
  }
});

function AboutCard ({title, description}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5">
        {title}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
        {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutCard;

