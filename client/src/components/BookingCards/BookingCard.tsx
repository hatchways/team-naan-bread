/* eslint-disable prettier/prettier */
import React from "react";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  IconButton, 
  Typography, 
  Box, 
  Grid
} from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import useStyles from "../../pages/MySitters/useStyles";

const mockImg = 'https://badairies.co.uk/assets/admin/plugins/images/users/4.jpg';

interface Props {
  createDate: any;
  requests: any;
}

interface Booking {
  _id: string;
  start: string;
  end: string;
  accepted: string;
  declined: string;
  user: { firstName: string; lastName: string };
}

function BookingCard({createDate, requests}: Props ): JSX.Element {
  const classes = useStyles();

  return (
    <Box component="div" style={{height: 264, overflow: "auto"}}>
      {requests.length && requests.map((booking: Booking) => (
        <Card key={booking._id} className={classes.cardBooking}>
          <CardHeader 
            classes={{title: classes.cardsBookingHeaderTitle}}
            title={createDate(booking.start, booking.end)}
            action={
              <IconButton aria-label="settings">
                <Settings fontSize="small" color="disabled" />
              </IconButton>
            }
            className={classes.cardBookingHeader} 
          />
          <CardContent className={classes.cardBookingContent}>
            <Grid container>
              <Grid item xs={8}>
                <Box className={classes.cardUserInfoBox} >
                  <Box>
                    <img src={mockImg} alt="user" className={classes.cardUserThumbnail}/>
                  </Box>
                  <Typography component="h3" className={classes.cardUserName}>
                    {`
                      ${booking.user.firstName} 
                      ${booking.user.lastName} 
                    `}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.cardBookingState}>
                  {booking.accepted 
                    ? "Accepted" : booking.declined 
                      ? "Declined" 
                      : "Pending"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default BookingCard;