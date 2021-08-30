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
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
  },
  formCard: {
    alignSelf: 'center',
    justifySelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '2rem 7rem',
    margin: '2rem',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
