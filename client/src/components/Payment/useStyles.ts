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
  submit: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 4),
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  creditCard: {
    fontSize: 16,
  },
}));

export default useStyles;
