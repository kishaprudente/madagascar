import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';
import MoodIcon from '@material-ui/icons/Mood';
import InboxIcon from '@material-ui/icons/Inbox';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    background: 'rgba(255, 216, 99)',
  },
});

const BottomNav = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to='/reply'
        icon={<ReplyIcon style={styles.icon} />}
        style={styles.button}
      />
      <BottomNavigationAction
        component={Link}
        to='/inbox'
        icon={<InboxIcon style={styles.icon} />}
        style={styles.button}
      />
      <BottomNavigationAction
        component={Link}
        to='/moodboard'
        icon={<MoodIcon style={styles.icon} />}
        style={styles.button}
      />
      <BottomNavigationAction
        component={Link}
        to='/stats'
        icon={<BarChartIcon style={styles.icon} />}
        style={styles.button}
      />
      <BottomNavigationAction
        component={Link}
        to='/about'
        value='about'
        icon={<InfoIcon style={styles.icon} />}
        style={styles.button}
      />
    </BottomNavigation>
  );
};

const styles = {
  button: {
    padding: 0,
  },
  icon: {
    color: 'black',
  },
};

export default BottomNav;
