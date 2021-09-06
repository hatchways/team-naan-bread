/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bookingDay: {
    "& > .MuiButtonBase-root" : {
      backgroundColor: "#FF0000",
      borderRadius: "#FF0000",
      fontWeight: "bold",
      color: "#ffffff"
    }
  },
}));

export default useStyles;
