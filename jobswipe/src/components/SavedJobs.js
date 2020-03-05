import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id,
  dateSaved,
  jobTitle,
  company,
  location,
  fulltime,
  applied
) {
  return { id, dateSaved, jobTitle, company, location, fulltime, applied };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Sr. Full Stack Developer',
    'Hatchworks Technologies',
    'Chamblee',
    'Y',
    'Y'
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Ruby Full Stack Developer (m/f)',
    'cognita Deutschland GmbH',
    'Berlin',
    'Y',
    'Y'
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Senior React Engineer',
    'Chopt Creative Salad Co.',
    'New York City (or Remote)',
    'Y',
    'Y'
  ),
  createData(
    3,
    '15 Mar, 2019',
    'Software Engineers- All levels!',
    'TravelPerk',
    'Berlin',
    'Y',
    'Y'
  ),
  createData(
    4,
    '14 Mar, 2019',
    'React / Front-end Developer',
    'nederlandse publieke omroep',
    'Hilversum',
    'Y',
    'Y'
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function SavedJobs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recently Saved Jobs</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Saved</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Full Time?</TableCell>
            <TableCell>Applied?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.dateSaved}</TableCell>
              <TableCell>{row.jobTitle}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.fulltime}</TableCell>
              <TableCell>{row.applied}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more saved jobs
        </Link>
      </div>
    </React.Fragment>
  );
}
