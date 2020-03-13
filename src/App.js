import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Jobs from './components/Jobs';

const App = props => {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <div>
        <ul>...</ul>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/admin' component={Admin} />
        <Route path='/newjobs' component={Jobs} />
      </div>
    </AuthContext.Provider>
  );
};
export default App;
