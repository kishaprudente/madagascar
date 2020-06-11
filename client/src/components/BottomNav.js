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
  const [value, setValue] = React.useState('mood')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to="/reply"
        label="Send"
        value="send"
        icon={<SendIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/dashboard"
        label="Mood"
        value="mood"
        icon={<MoodIcon />}
        />
      <BottomNavigationAction
        component={Link}
        to="/inbox"
        label="Send"
        value="send"
        icon={<InboxIcon />}
      />
      </BottomNavigation>
  );
};


export default BottomNav;
