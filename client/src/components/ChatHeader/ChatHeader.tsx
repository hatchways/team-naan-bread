import Button from '@material-ui/core/Button';
import { Badge, Avatar, Typography, Grid } from '@material-ui/core/';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import ChatHeaderButton from './ChatHeaderButton';
interface Props {
  linkTo: string;
  linkText?: string;
}
const ChatHeader = ({ linkTo, linkText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={12} md={12}>
      <Box p={2} className={classes.authHeader}>
        <Link to={linkTo} className={classes.underlinedLink}>
          <Button color="primary">{linkText}</Button>
        </Link>
        <Badge
          classes={{ badge: `${classes.underlinedLink} ${true && classes.online}` }}
          variant="dot"
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <Typography className={classes.underlinedLink}>Typography</Typography>
        </Badge>
        <ChatHeaderButton />
      </Box>
    </Grid>
  );
};

export default ChatHeader;
