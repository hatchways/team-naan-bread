import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../../context/useAuthContext';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DateForm from './DateForm/DateForm';
import { Divider } from '@material-ui/core';
import getAvailability from '../../../helpers/APICalls/getAvailability';
import updateAvailability from '../../../helpers/APICalls/updateAvailability';
import { Availability, date } from '../../../interface/Availability';
import { useSnackBar } from '../../../context/useSnackbarContext';

export default function Availiability(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const { updateSnackBarMessage } = useSnackBar();
  const [availability, setAvailability] = React.useState<Availability>({
    Monday: {
      to: '',
      from: '',
    },
    Tuesday: {
      to: '',
      from: '',
    },
    Wednesday: {
      to: '',
      from: '',
    },
    Thursday: {
      to: '',
      from: '',
    },
    Friday: {
      to: '',
      from: '',
    },
    Saturday: {
      to: '',
      from: '',
    },
    Sunday: {
      to: '',
      from: '',
    },
  });

  const { loggedInUser } = useAuth();
  const classes = useStyles();

  //this will get the User's availabilityData using the getAvailability API
  useEffect(() => {
    setLoading(true);
    if (loggedInUser) {
      getAvailability(loggedInUser.id).then((data: Availability) => {
        setAvailability(data);
        setLoading(false);
      });
    }
  }, [loggedInUser]);

  const submitAvailability = () => {
    if (loggedInUser) {
      Object.keys(availability).forEach((date: string) => {
        console.log(availability[date]);
        if (availability[date].from === '' && availability[date].to != '') {
          const tempObj = Object.assign({}, availability);
          tempObj[date].to = '';
          setAvailability(tempObj);
        }
      });
      updateAvailability({ _id: loggedInUser.id, availability: availability }).then((data: Availability) => {
        updateSnackBarMessage('Updated Availability!');
      });
    }
  };

  const handleTimeFrom = (event: React.ChangeEvent<{ value: any }>, date: string) => {
    const tempObj = Object.assign({}, availability);
    tempObj[date].from = event.target.value;
    setAvailability(tempObj);
  };

  const handleTimeTo = (event: React.ChangeEvent<{ value: any }>, date: string) => {
    const tempObj = Object.assign({}, availability);
    tempObj[date].to = event.target.value;
    setAvailability(tempObj);
  };

  if (loggedInUser === undefined) return <CircularProgress />;
  if (loading) return <></>;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {['Edit Profile', 'Profile Photo', 'Availability', 'Payment', 'Security', 'Settings'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid
        container
        item
        xs={12}
        sm={8}
        md={7}
        elevation={6}
        component={Paper}
        square
        className={classes.mainContainer}
      >
        <Box className={classes.content}>
          <Typography className={classes.welcome} component="h1" variant="h5">
            Availability
          </Typography>
          <Box className={classes.formBox}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((date: string) => (
              <>
                <DateForm
                  key={date}
                  date={date}
                  availability={availability}
                  handleTimeFrom={handleTimeFrom}
                  handleTimeTo={handleTimeTo}
                />
                <Divider className={classes.divider} />
              </>
            ))}
          </Box>
          <Box className={classes.buttonContainer}>
            <Button className={classes.button} variant="contained" color="primary" onClick={submitAvailability}>
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
