import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
// import PublicHome from './components/PublicHome';
// import PrivateHome from './components/PrivateHome';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ListView from './components/ListView';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <main>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              // className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant='h6' className={classes.title}> */}
            <Typography variant='h6'>jobswipe</Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/signup' component={SignUp} />>
          <Route exact path='/signin' component={SignIn} />>
          {/* <AuthenticatedRoute path='/authhome' component={Dashboard} /> */}
          <Route path='/authhome' component={Dashboard} />
        </Switch>
      </main>
    </>
  );
}

export default App;
