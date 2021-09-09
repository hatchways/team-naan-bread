/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core/styles';

const red = "#FF0000";

const useStyles = makeStyles((theme) => ({
  bookingDay: {
    "& > .MuiButtonBase-root": {
      backgroundColor: red,
      fontWeight: "bold",
      color: "#ffffff"
    }
  },
  bookingsDatePicker: {
    "& .MuiPickersToolbar-toolbar, & .MuiPickersCalendarHeader-daysHeader": {
      display: "none"
    },
    "& .MuiPickersBasePicker-pickerView": {
      maxWidth: "100%",
      padding: theme.spacing(4)
    },
    "& .MuiPickersCalendarHeader-switchHeader": {
      height: theme.spacing(10),
      margin: theme.spacing(2),
      "& p": {
        fontSize: 20,
        color: red
      }
    },
    "& .MuiPickersCalendar-week": {
      justifyContent: "space-around",
      fontWeight: "bold"
    },
    "& p.MuiTypography-body2": {
      fontSize: "0.86rem",
      fontWeight: "bold"
    }
  }
}));

export default useStyles;
