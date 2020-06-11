import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import MoodIcon from '@material-ui/icons/Mood';
import InboxIcon from '@material-ui/icons/Inbox';
// import Send from '../assets/Send.svg';
// import Inbox from '../assets/Inbox.svg';
// import SendIcon from './SendIcon';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    bottom: 0,
  },
});

const BottomNav = () => {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to="/reply"
        label="Send"
        icon={<SendIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/dashboard"
        label="Mood"
        icon={<MoodIcon />}
        />
      <BottomNavigationAction
        component={Link}
        to="/inbox"
        label="Send"
        icon={<InboxIcon />}
      />
      </BottomNavigation>
  );
};

export default BottomNav;
