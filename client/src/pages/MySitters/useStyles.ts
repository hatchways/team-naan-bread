/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    justifyContent: "center",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8)
  },
  mySittersContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  mySittersColumns: {
    margin: theme.spacing(4)
  },
  cardWrapperNext: {
    marginBottom: theme.spacing(3),
    backgroundColor: "#ffffff",
  },
  cardWrapperBookings: {
    padding: theme.spacing(3),
    backgroundColor: "#ffffff",
  },
  cardBooking: {
    boxShadow: "0 0 4px rgba(0,0,0,0.2)",
    margin: theme.spacing(1),
    "&:hover": {
      boxShadow: "0 0 4px rgba(0,0,0,0.5)",
    }
  },
  cardBookingContent: {
    padding: theme.spacing(0, 3, 3, 3),
  },
  cardBookingHeader: {
    padding: theme.spacing(3, 3, 0, 3),
  },
  cardBookingHeaderTitle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.8em"
  },
  cardsBookingHeaderTitle: {
    fontSize: "1em",
    marginBottom: theme.spacing(1)
  },
  cardUserThumbnail: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: 10,
  },
  cardUserName: {
    margin: 0,
    fontWeight: "bold",
  },
  cardUserInfoBox: {
    display: "flex",
    alignItems: "center",
  },
  cardDate: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  cardBookingState: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    textAlign: "right",
    fontSize: "0.7em",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.4)"
  }
}));

export default useStyles;
