import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  messageSideBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: theme.palette.primary.main,
    letterSpacing: -0.17,
    fontWeight: 'bold',
  },
  previewTextSecondary: {
    fontSize: 12,
    color: theme.palette.primary.main,
    letterSpacing: -0.17,
  },
  notification: {
    height: 20,
    width: 'fit-content',
    marginRight: 10,
    color: 'white',
    fontSize: 10,
    letterSpacing: -0.5,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  chatRoot: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
  sideBarChat: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: theme.palette.secondary.main,
  },
  profilePic: {
    height: 44,
    width: 44,
  },
  badge: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    border: '2px solid white',
    backgroundColor: '#D0DAE9',
  },
  online: {
    backgroundColor: '#1CED84',
  },
}));

export default useStyles;
