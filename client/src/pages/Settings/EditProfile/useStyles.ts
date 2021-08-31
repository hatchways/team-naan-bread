import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  mainContainer: {
    height: '90vh',
    justifyContent: 'center',
    padding: theme.spacing(5),
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    border: 'none',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingTop: 100,
  },
}));

export default useStyles;
