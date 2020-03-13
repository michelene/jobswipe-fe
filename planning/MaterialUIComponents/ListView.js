import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { APIURL } from '../config';
import JobContainer from './JobContainer';

const ListView = props => {
  const [jobs, setListView] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `${APIURL}/jobs`;
    fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(jobs => {
        setListView(jobs);
      })
      .catch(error => {
        console.log('Error: ', error);
        // Update the state if there was an error
        // so we can give feedback to the user!
        setError(true);
      });
  }, []);

  // Check if we have our jobs
  // Display "Loading..." if not
  if (jobs.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Sorry, there was a problem.</div>;
  }

  return (
    <ul>
      {jobs.map(job => (
        <li className='ListView' key={job._id}>
          <Link to={`jobs/${job._id}`}>
            <Route
              exact
              path={'/jobs/:id'}
              render={props => {
                return <JobContainer match={props.match} />;
              }}
            />
            {job.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
