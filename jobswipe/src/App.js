import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
// import PublicHome from './components/PublicHome';
// import PrivateHome from './components/PrivateHome';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ListView from './components/ListView';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <main>
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
