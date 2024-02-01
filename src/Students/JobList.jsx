import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, makeStyles, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(1),
  },
  role: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  requirements: {
    marginBottom: theme.spacing(1),
  },
  salary: {
    fontWeight: 'bold',
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <Container component="div" maxWidth="md" className={classes.root} disableGutters>
      {/* Added disableGutters to remove container padding */}
      <Typography variant="h4" className={classes.heading}>
        Jobs List
      </Typography>
      <Grid container spacing={2}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} key={job._id}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.companyName}>{job.companyName}</Typography>
                <Typography className={classes.role}>
                  Role: {job.role}
                </Typography>
                <Typography className={classes.requirements}>
                  Requirements: {job.requirements}
                </Typography>
                <Typography className={classes.salary}>
                  Salary: {job.salary}
                </Typography>
                <Typography>
                  Apply Link: {job.applyLink}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobList;
