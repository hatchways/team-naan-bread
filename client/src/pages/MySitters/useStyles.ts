/* eslint-disable prettier/prettier */
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#fafafb",
    justifyContent: "center"
  },
  mySittersContent: {
    display: "flex",
    flexDirection: "row",
  },
  mySittersColumns: {
    margin: theme.spacing(4)
  },
  cardBookingsTitle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.9em"
  }
}));

export default useStyles;