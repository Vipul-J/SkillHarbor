// components/Dashboard.js
import React from 'react';
import { Button, Card, CardContent, Container, Typography, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCommentIcon from '@material-ui/icons/AddComment';
import WorkIcon from '@material-ui/icons/Work';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import logo from '../assets/logo.png'; // Import your logo image
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  card: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
    padding: theme.spacing(3),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  logo: {
    width: '150px', // Adjust the width as needed
    marginBottom: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions if needed
    // For example, clear user authentication state
    // Then redirect to the home page
    navigate('/');
  };
  const options = [
    { label: 'List a Job', icon: <ListAltIcon />, link: '/addJob' },
    { label: 'Add Resource', icon: <LibraryBooksIcon />, link: '/addResources' },
    { label: 'Add Students', icon: <PersonAddIcon />, link: '/reg' },
    { label: 'Add Interview Exp', icon: <AddCommentIcon />, link: '/addExperiences' },
    { label: 'Get All Jobs', icon: <WorkIcon />, link: '/getJob' },
    { label: 'Get Interview Exp', icon: <QuestionAnswerIcon />, link: '/getExperience' },
  ];

  return (
    <Container component="main" maxWidth="xl" className={classes.root}>
      <img src={logo} alt="Logo" className={classes.logo} />

      <Grid container spacing={2}>
        {options.map((option, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Link to={option.link} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={option.icon}
                  >
                    {option.label}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        className={classes.logoutButton}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
