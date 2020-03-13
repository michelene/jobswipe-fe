import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { APIURL } from '../config';
import JobContainer from './JobContainer';

const Jobs = props => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);

  let getJobs = () => {
    const url = `${APIURL}/getghjobs`;
    fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .then(res => {
        let this_is_json = JSON.parse(res);
        setJobs(this_is_json);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getJobs();
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
        <li className='JobLists' key={job.id}>
          <Link to={`jobs/${job.id}`}>
            <Route
              exact
              path={'/jobs/:id'}
              render={props => {
                return <JobContainer match={props.match} />;
              }}
            />
            {job.title}
          </Link>{' '}
          ({job.company})
        </li>
      ))}
    </ul>
  );
};

export default Jobs;
