/* eslint-disable prettier/prettier */
import React  from "react";
import useStyles from "./useStyles";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Link,
  Box,
  Grid,
  Avatar
} from "@material-ui/core";
import { Settings } from "@material-ui/icons";

const mockImg = 'https://badairies.co.uk/assets/admin/plugins/images/users/4.jpg';

interface Props {
  createDate: any;
  requests: any;
  cardAction: boolean;
  selectedBooking: string;
  displayCardActions: any;
  updateSelectedRequest: any;
}

interface Booking {
  _id: string;
  start: string;
  end: string;
  accepted: string;
  declined: string;
  user: { firstName: string; lastName: string, profilePhoto?: { url: string; }; };
}

function BookingCard({
  createDate,
  requests,
  cardAction,
  selectedBooking,
  displayCardActions,
  updateSelectedRequest}: Props ): JSX.Element {

  const classes = useStyles();

  return (
    <Box component="div" style={{height: 264, overflow: "auto"}}>
      {requests.length
        ? requests.map((booking: Booking) => (
          <Card key={booking._id} className={classes.cardBooking}>
            <CardHeader
              classes={{title: classes.cardsBookingHeaderTitle}}
              title={createDate(booking.start, booking.end)}
              action={
                <IconButton aria-label="settings" onClick={() => {
                  displayCardActions(booking)}}>
                  <Settings fontSize="small" color="disabled" />
                  {(cardAction && selectedBooking === booking._id) &&
                    (
                    <Box className={classes.cardOptions}>
                      <Typography>
                        <Link href="#" onClick={(): void => {
                          updateSelectedRequest(booking._id, "accepted")
                          }}>Accept</Link>
                      </Typography>
                      <Typography>
                        <Link href="#" onClick={(): void => {
                          updateSelectedRequest(booking._id, "declined")
                          }}>Decline</Link>
                      </Typography>
                    </Box>
                    )
                  }
                </IconButton>
              }
              className={classes.cardBookingHeader}
            />
            <CardContent className={classes.cardBookingContent}>
              <Grid container>
                <Grid item xs={8}>
                  <Box className={classes.cardUserInfoBox} >
                    <Box>
                      <Avatar src={booking.user.profilePhoto?booking.user.profilePhoto.url:undefined} alt="user" className={classes.cardUserThumbnail}/>
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
          ))
        : <Card>
            <CardContent>
              No bookings to display.
            </CardContent>
          </Card>
      }
    </Box>
  );
}

export default BookingCard;
