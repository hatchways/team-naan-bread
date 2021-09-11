/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { RequestData } from "../../interface/Request";
import getRequests from '../../helpers/APICalls/getRequests';
import {
  Container,
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography, Grow,
} from '@material-ui/core';
import { Settings } from "@material-ui/icons";
import useStyles from "./useStyles";
import BookingCard from "../../components/BookingCards/BookingCard";
import BookingsDatePicker from "../../components/BookingsDatePicker/BookingsDatePicker";

const mockImg = 'https://badairies.co.uk/assets/admin/plugins/images/users/4.jpg';

export default function MySitters(): JSX.Element {
  const classes = useStyles();

  const [requests, setRequests] = useState<RequestData[]>([]);
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    getRequests().then((data) => {
      setRequests(data);
      const dates: Date[] = [];
      data.map((booking) => {
        if (booking.accepted) {
          const bookingDate = new Date(booking.start);
          dates.push(bookingDate);
        }
      });
      setDates(dates);
    });
  }, []);

  const currentDate = new Date();

  const nextBookingFinder = (bookings: RequestData[]) => {
    const nextBooking: RequestData[] = [];
    bookings.forEach((booking) => {
      if (booking.accepted && !nextBooking.length) {
        nextBooking.push(booking);
      }
    });
    return nextBooking;
  };

  const currentBookings = requests.filter((request) => {
    const requestDate = new Date(request.start);
    return requestDate >= currentDate;
  });

  const nextBooking: RequestData[] = nextBookingFinder(currentBookings);

  const pastBookings = requests.filter((request) => {
    const requestDate = new Date(request.start);
    return requestDate < currentDate;
  });

  // function to display bookings dates
  const createDate = (dateStart: any, dateEnd: any) => {
    dateStart = new Date(dateStart);
    dateEnd = new Date(dateEnd);
    const day = dateStart.getDate();
    let month = dateStart.toLocaleDateString('us-US', { month: 'long' });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    const year = dateStart.getFullYear();
    const timeStart = dateStart.getHours();
    const timeEnd = dateEnd.getHours();
    return `${day}, ${month} ${year}, ${timeStart}-${timeEnd} HS.`;
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.mySittersContent} component="main">
        <Grow in={true}>
          <Grid item xs={12} sm={5} className={classes.mySittersColumns}>
            <Box className={classes.cardWrapperNext}>
              <Card variant="outlined">
                <CardHeader
                  classes={{ title: classes.cardBookingHeaderTitle }}
                  title="Your next booking"
                  action={
                    <IconButton aria-label="settings">
                      <Settings color="disabled" />
                    </IconButton>
                  }
                  className={classes.cardBookingHeader}
                />
                <CardContent className={classes.cardBookingContent}>
                  <Typography variant="h6" component="h6" className={classes.cardDate}>
                    {currentBookings.length && createDate(nextBooking[0]?.start, nextBooking[0]?.end)}
                  </Typography>
                  <Box className={classes.cardUserInfoBox}>
                    <Box>
                      <img src={mockImg} alt="user" className={classes.cardUserThumbnail} />
                    </Box>
                    <Typography component="h3" className={classes.cardUserName}>
                      {`
                      ${nextBooking[0]?.user.firstName} 
                      ${nextBooking[0]?.user.lastName} 
                    `}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box className={classes.cardWrapperBookings}>
              <CardHeader title="Current Bookings" classes={{ title: classes.cardBookingHeaderTitle }} />
              <BookingCard createDate={createDate} requests={currentBookings} />
            </Box>
            <Box className={classes.cardWrapperBookings}>
              <CardHeader title="Past Bookings" classes={{ title: classes.cardBookingHeaderTitle }} />
              <Box overflow="hidden">
                <BookingCard createDate={createDate} requests={pastBookings} />
              </Box>
            </Box>
          </Grid>
        </Grow>
        <Grow in={true}>
          <Grid item xs={12} sm={7} className={classes.mySittersColumns}>
            <BookingsDatePicker dates={dates} />
          </Grid>
        </Grow>
      </Box>
    </Container>
  );
}
