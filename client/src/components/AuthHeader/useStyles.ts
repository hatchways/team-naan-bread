import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },

  accAside: {
    fontSize: 14,
    color: '#b0b0b0',
    fontWeight: 400,
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: { textDecoration: 'none' },
  underlinedLink: {
    marginRight: 30,
  },
  loginBtn: {
    width: 130,
    height: 44,
    borderRadius: 0,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    boxShadow: 'none',
    marginRight: 10,
  },
  signupBtn: {
    width: 130,
    height: 44,
    borderRadius: 0,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    boxShadow: 'none',
    marginRight: 10,
  },
}));

export default useStyles;
