import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />>
          <Route exact path='/signup' component={SignUp} />>
          <Route exact path='/signin' component={SignIn} />>
        </Switch>
      </main>
    </>
  );
}

export default App;
