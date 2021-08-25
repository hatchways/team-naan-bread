import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  photo: {
    width: 100,
    height: 100,
    margin: 55,
  },
  delete_button: {
    alignSelf: 'center',
    alignContent: 'center',
    margin: 60,
    display: 'flex',
  },
  input: {
    display: 'none',
  },
}));

export default useStyles;
