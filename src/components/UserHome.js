import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const UserHome = () => {
  return (
    <>
      <div className='UserHome'>
        <div className='UserHomeButtons'>
          <Button color='primary' component={Link} to='/review'>
            View New Jobs
          </Button>
          <Button color='primary' component={Link} to='/savedjobs'>
            View My Saved Jobs
          </Button>
          <Button color='primary' component={Link} to='/goodbye'>
            Delete my Jobble account
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserHome;
