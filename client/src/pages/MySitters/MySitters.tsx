/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import getRequests from '../../helpers/APICalls/getRequests';
import { RequestData } from '../../interface/Request';
import { Container, Grid, Box } from '@material-ui/core';
import useStyles from './useStyles';

export default function MySitters(): JSX.Element {
  const classes = useStyles();

  const [requests, setRequests] = useState<RequestData[]>([]);

  useEffect(() => {
    getRequests().then((data) => setRequests(data));
  }, []);

  console.log(requests);

  return (
    <Container className={classes.root}>
      <Box className={classes.mySittersContent} component="main">
        <Grid item xs={12} sm={5} className={classes.mySittersColumns}>
          Requests listings
          {requests.map((req) => (
            <span key={req._id}>Accepted: {req._id}</span>
          ))}
        </Grid>
        <Grid item xs={12} sm={7} className={classes.mySittersColumns}>
          Calendar
        </Grid>
      </Box>
    </Container>
  );
}
