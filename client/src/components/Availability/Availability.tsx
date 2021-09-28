import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import Button from '@material-ui/core/Button';
import DateForm from './DateForm/DateForm';
import { Divider } from '@material-ui/core';
import getAvailability from '../../helpers/APICalls/getAvailability';
import updateAvailability from '../../helpers/APICalls/updateAvailability';
import { Availability } from '../../interface/Availability';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Availiability(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const { updateSnackBarMessage } = useSnackBar();
  const [availability, setAvailability] = React.useState<Availability>({} as Availability);

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

  const handleTimeFrom = (event: React.ChangeEvent<{ value: string }>, date: string) => {
    const tempObj = Object.assign({}, availability);
    tempObj[date].from = event.target.value;
    setAvailability(tempObj);
  };

  const handleTimeTo = (event: React.ChangeEvent<{ value: string }>, date: string) => {
    const tempObj = Object.assign({}, availability);
    tempObj[date].to = event.target.value;
    setAvailability(tempObj);
  };

  if (loggedInUser === undefined) return <CircularProgress />;
  if (loading) return <></>;
  if (!availability.Monday) return <></>;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
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
