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
    alignItems: 'center',
    margin: '2rem',
    width: '90vw',
    backgroundColor: theme.palette.secondary.main,
  },
  imageList: {
    margin: '8rem',
    height: 'auto',
  },
  imageListItem: {
    margin: '2rem',
  },
}));

export default useStyles;
