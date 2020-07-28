import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  // Menu,
  // MenuItem,
  // IconButton,
  Button,
  Avatar,
} from '@material-ui/core';
// import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import { useAuth } from '../utils/authContext';
import userAPI from '../utils/userAPI';
import Chirpy from '../assets/chirpy.png'

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
    fontFamily: 'Reenie Beenie',
    paddingLeft: '10px'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { authTokens, setAuthTokens } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const logout = () => {
    userAPI.logoutUser();
    setAuthTokens('');
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
            style={{height: '100%'}}
          />
          <Typography variant='h6' className={classes.title}>
            Chirrup!
          </Typography>
          {authTokens && (
              <Button onClick={logout}>
                Logout
              </Button>
            // <div>
            //   <IconButton
            //     aria-label='account of current user'
            //     aria-controls='menu-appbar'
            //     aria-haspopup='true'
            //     onClick={handleMenu}
            //     style={{ color: 'black' }}
            //   >
            //     <AccountCircle />
            //   </IconButton>
            //   <Menu
            //     id='menu-appbar'
            //     anchorEl={anchorEl}
            //     anchorOrigin={{
            //       vertical: 'top',
            //       horizontal: 'right',
            //     }}
            //     keepMounted
            //     transformOrigin={{
            //       vertical: 'top',
            //       horizontal: 'right',
            //     }}
            //     open={open}
            //     onClose={handleClose}
            //   >
            //     <MenuItem onClick={logout}>Logout</MenuItem>
            //   </Menu>
            // </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
