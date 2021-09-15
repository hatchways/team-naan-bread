import { Box, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BadgeAvatar from '../../components/Chat/BadgeAvatar';
import useStyles from './useStyles';

export default function Input(): JSX.Element {
  const classes = useStyles();

  return (
    <Box boxShadow={2} className={classes.activeChatHeader}>
      <Box className={classes.activeChatHeaderBadge}>
        <BadgeAvatar />
        <Typography variant="h6" style={{ marginLeft: 10 }}>
          Mary Wills
        </Typography>
      </Box>
      <MoreHorizIcon className={classes.moreHorizonIcon} />
    </Box>
  );
}
