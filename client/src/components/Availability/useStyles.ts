import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    padding: theme.spacing(4),
    minWidth: '1000px',
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
    height: '50px',
    justifyContent: 'center',
  },
  button: {
    width: '16%',
  },
  divider: {
    margin: 10,
  },
}));

export default useStyles;
