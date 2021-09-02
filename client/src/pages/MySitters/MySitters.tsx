/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import getRequests from '../../helpers/APICalls/getRequests';
import { RequestData } from "../../interface/Request";
import { Container, Grid, Box, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from "./useStyles";

export default function MySitters(): JSX.Element {
  const classes = useStyles();

  const [requests, setRequests] = useState<RequestData[]>([]);

  useEffect(() => {
    getRequests()
      .then(data => setRequests(data));
  }, []);

  
  const currentDate = new Date();

  const currentBookings = requests.filter((request) => {
    const requestDate = new Date(request.start);
    return requestDate >= currentDate;
  });

  const pastBookings = requests.filter((request) => {
    const requestDate = new Date(request.start);
    return requestDate < currentDate;
  })

  const createDate = (dateStart: any, dateEnd: any) => {
    dateStart = new Date(dateStart)
    dateEnd = new Date(dateEnd)
    const day = dateStart.getDay()
    let month = dateStart.toLocaleDateString("us-US", {month: "long"})
    month = month.charAt(0).toUpperCase() + month.slice(1);
    const year = dateStart.getFullYear();
    const timeStart = dateStart.getHours()
    const timeEnd = dateEnd.getHours()
    const ampm = timeStart >= 12 ? "pm" : "am";
    return `${day}, ${month} ${year}, ${timeStart}-${timeEnd} ${ampm}`
  }

  return (
    <Container className={classes.root}>
      <Box className={classes.mySittersContent} component="main">
        <Grid item xs={12} sm={5} className={classes.mySittersColumns}>
          <Card variant="outlined">
            <CardContent>
              <Typography className={classes.cardBookingsTitle}>
                Your next booking
              </Typography>
              <Typography variant="h6" component="h6">
                {currentBookings.length 
                && createDate(currentBookings[0].start, currentBookings[0].end)}
              </Typography>
              <Typography>{`
                ${currentBookings.length && currentBookings[0].user.firstName} 
                ${currentBookings.length && currentBookings[0].user.lastName} 
              `}
              </Typography>
            </CardContent>
          </Card>
          {requests.map(req => <span key={req._id}>Accepted: {req._id}</span> )}
        </Grid>
        <Grid item xs={12} sm={7} className={classes.mySittersColumns}>
          Calendar
        </Grid>
      </Box>
    </Container>
  )
};