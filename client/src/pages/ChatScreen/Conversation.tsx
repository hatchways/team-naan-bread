import { Box } from '@material-ui/core';
import ReceiverBubble from './ReceiverBubble';
import SenderBubble from './SenderBubble';
import useStyles from './useStyles';

export default function Conversation(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.conversation}>
      {['Hello', 'yes o', 'hey', 'hi', 'hi', 'hi', 'hi', 'hi'].map((message, i) => {
        // const time = moment(message.createdAt).format("h:mm");
        return i % 2 == 0 ? <SenderBubble key={'SenderBubble' + i} /> : <ReceiverBubble key={'OtherUserBubble' + i} />;
      })}
    </Box>
  );
}
