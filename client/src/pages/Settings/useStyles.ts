import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    padding: theme.spacing(8),
  },
}));

export default useStyles;
