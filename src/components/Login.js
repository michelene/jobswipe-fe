import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Card, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from '../context/auth';
import { APIURL } from '../config.js';

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();
  // const referrer = props.location.state.referrer || '/';

  function postLogin() {
    axios
      // .post(`${APIURL}/rest-auth/login`, {
      // userName,
      // password
      // })
      .post(`${APIURL}/rest-auth/login`, {
        username: 'super3',
        email: 's@s.com',
        password: 'password'
      })
      .then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <Card>
      <Form>
        <Input
          type='username'
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder='username'
        />
        <Input
          type='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder='password'
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to='/signup'>Don't have an account?</Link>
      {isError && (
        <Error>The username or password provided were incorrect!</Error>
      )}
    </Card>
  );
}

export default Login;
