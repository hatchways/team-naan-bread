import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
  },
  sideBarContainer: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
    flexGrow: 1,
    flexDirection: 'column',
  },
  sideBarChatList: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    overflow: 'auto',
    margin: 5,
  },
  activeChatBody: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
    flexDirection: 'column',
  },
  activeChatContainer: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
    justifyContent: 'center',
    margin: 5,
  },
  activeChatHeader: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.main,
    paddingLeft: 5,
    margin: 5,
  },
  activeChatHeaderBadge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  usernameText: {
    marginLeft: 10,
  },
  moreHorizonIcon: {},
  inboxMessage: {
    marginLeft: '20px',
    justifySelf: 'center',
  },
  inputRoot: {},
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 0,
    margin: 3,
  },
  senderBubbleRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: 5,
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  avatar: {
    height: 15,
    width: 15,
    marginTop: 3,
    marginBottom: 10,
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
  readBadge: {
    padding: 8,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  receiverRoot: {
    display: 'flex',
    margin: 5,
  },
  conversation: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
