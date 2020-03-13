import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import logo from '../jobswipe.svg';

export default function StaticAppBar() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <img height='100%' src={logo} alt='logo' />

          {/* <Typography variant='h6' className={classes.title}> */}
          {/* <Typography variant='h6'>jobswipe</Typography> */}
          <Button color='inherit' style={{ flex: 1 }}>
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
