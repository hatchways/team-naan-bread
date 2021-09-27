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
    padding: theme.spacing(2, 4),
    marginTop: theme.spacing(4),
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    fontWeight: 'bold',
  },
  creditCard: {
    fontSize: 16,
    margin: theme.spacing(4, 0),
  },
  paymentMethodDetails: {
    '& .card-brand': {
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: 90,
      height: 60,
      marginBottom: theme.spacing(2),
    },
    '& .card-visa': {
      backgroundImage: 'url("https://logos-marcas.com/wp-content/uploads/2020/04/Visa-Emblema.png")',
    },
    '& .card-mastercard': {
      backgroundImage: 'url("https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png")',
    },
    '& h3': {
      fontWeight: '900',
      fontSize: 20,
    },
    '& .exp-date': {
      marginBottom: theme.spacing(2),
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.5)',
    },
  },
}));

export default useStyles;
