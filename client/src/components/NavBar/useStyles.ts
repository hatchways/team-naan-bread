import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  bar: {
    padding: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));
export default useStyles;
