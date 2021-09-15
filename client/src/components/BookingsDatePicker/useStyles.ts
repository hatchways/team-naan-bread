/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bookingDay: {
    '& > .MuiButtonBase-root': {
      backgroundColor: theme.palette.primary.main,
      fontWeight: 'bold',
      color: '#ffffff',
    },
  },
  bookingsDatePicker: {
    '& .MuiPickersToolbar-toolbar, & .MuiPickersCalendarHeader-daysHeader': {
      display: 'none',
    },
    '& .MuiPickersBasePicker-pickerView': {
      maxWidth: '100%',
      padding: theme.spacing(4),
    },
    '& .MuiPickersCalendarHeader-switchHeader': {
      height: theme.spacing(10),
      margin: theme.spacing(2),
      '& p': {
        fontSize: 20,
        color: theme.palette.primary.main,
      },
      '& .MuiPickersCalendarHeader-transitionContainer': {
        height: 32,
      },
    },
    '& .MuiPickersCalendar-week': {
      justifyContent: 'space-around',
      fontWeight: 'bold',
      paddingBottom: theme.spacing(1),
    },
    '& p.MuiTypography-body2': {
      fontSize: '0.86rem',
      fontWeight: 'bold',
    },
    '& .MuiPickersDay-daySelected': {
      backgroundColor: '#f1f1f1',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
}));

export default useStyles;
