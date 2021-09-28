import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
    alignItems: 'center',
    padding: theme.spacing(10),
  },
  content: {
    width: '100%',
  },
  welcome: {
    display: 'flex',
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    justifyContent: 'center',
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
  weekday: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  buttonContainer: {
    marginTop: '2%',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    width: '16%',
  },
}));

export default useStyles;
