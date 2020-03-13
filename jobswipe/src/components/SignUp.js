import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from '../assets/jobswipe.jpg';
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from '../context/auth';
import { APIURL } from '../config.js';

function Signup() {
  const [isSignedUp, setSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  function postSignup() {
    axios
      .post(`${APIURL}/rest-auth/registration`, {
        userName,
        password
      })
      .then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setSignedUp(true);
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        setIsError(true);
      });
  }

  if (isSignedUp) {
    return <Redirect to='/' />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type='username'
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder='email'
        />
        <Input
          type='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder='password'
        />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to='/login'>Already have an account?</Link>
      {isError && (
        <Error>The username or password provided were incorrect!</Error>
      )}
    </Card>
  );
}

export default Signup;
