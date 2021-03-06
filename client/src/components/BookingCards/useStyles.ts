/* eslint-disable prettier/prettier */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  },
  cardOptions: {
    position: "absolute",
    top: 0,
    right: 0,
    "& p": {
      boxShadow: "2px 2px 0px rgba(0,0,0,0.15)",
      backgroundColor: "#ffffff",
      fontSize: "0.7rem",
      fontWeight: "700",
      border: "1px solid #dddddd",
      width: 72,
      "& a": {
        padding: theme.spacing(1),
        display: "block"
      }
    }
  },
  dropDateTitle: {
    color: "rgba(0,0,0,0.4)",
    textTransform: "uppercase",
    fontSize: "0.8em"
  }
}));

export default useStyles;