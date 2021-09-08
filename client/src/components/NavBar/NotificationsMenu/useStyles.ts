import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  arrowUp: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid black',
    alignItems: 'center',
    marginLeft: '50%',
    marginRight: '50%',
  },
  notification: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#000000',
  },
  notificationType: {
    fontSize: '10px',
  },
  menu: {
    borderColor: '#000000',
  },
  badge: {
    color: '#11cb5f',
  },
  notificationAvatar: {
    width: '55px',
    height: '55px',
    marginRight: 15,
  },
  notificationMenuItem: {
    paddingLeft: 4,
  },
}));
export default useStyles;
