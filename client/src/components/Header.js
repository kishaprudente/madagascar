import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../utils/authContext';
import userAPI from '../utils/userAPI';
import Chirpy from '../assets/chirpy.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
    fontFamily: 'Ruluko',
    paddingLeft: '16px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  button: {
    fontFamily: 'Ruluko',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { authTokens, setAuthTokens, setCurrentUser } = useAuth();

  const logout = async () => {
    try {
      await userAPI.logoutUser();
      setAuthTokens('');
      setCurrentUser('');
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#A1D1B6' }} position='fixed'>
        <Toolbar>
          <Avatar
            alt='logo'
            src={Chirpy}
            variant='square'
            size={100}
            style={{ height: '100%' }}
          />
          <Typography variant='h5' className={classes.title}>
            Chirrup!
          </Typography>
          {authTokens && (
            <Button onClick={logout} className={classes.button}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
