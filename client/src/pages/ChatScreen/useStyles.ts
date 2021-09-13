import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: '2rem',
  },
  headerWrapper: {
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
  sitterAboutTypo: {
    width: '80%',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  sitterBioItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  sitterBioContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(8),
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  detailsCard: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
  },
  imageList: {
    margin: '8rem',
    height: 'auto',
  },
  imageListItem: {
    margin: '2rem',
  },
  sideBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
  },
  sideBarHeader: {
    padding: '2rem',
  },
  messageSideBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 20,
    flexGrow: 1,
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
  chatContainer: {
    backgroundColor: 'white',
    margin: 5,
  },
  activeChat: {
    backgroundColor: 'white',
  },
}));

export default useStyles;
