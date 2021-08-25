import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.secondary.main,
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
  },
  formContainer: {
    backgroundColor: theme.palette.secondary.main,
  },
  formCard: {
    alignSelf: 'center',
    justifySelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '2rem 7rem',
    margin: '2rem',
  },
}));

export default useStyles;
