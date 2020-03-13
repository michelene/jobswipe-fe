import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <StaticAppBar />
      <main>
        <Switch>
          <Route exact path='/signup' component={SignUp} />>
          <Route exact path='/signin' component={SignIn} />>
          {/* <AuthenticatedRoute path='/authhome' component={Dashboard} /> */}
          <Route path='/authhome' component={Dashboard} />
          <Route path='/publichome' component={PublicHome} />
        </Switch>
      </main>
    </>
  );
}

export default App;
