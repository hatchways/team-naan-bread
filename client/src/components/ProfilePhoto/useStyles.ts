import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(4),
  },
  mainContainer: {
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
  welcome: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontWeight: 700,
    textAlign: 'center',
  },
}));

export default useStyles;
