import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';

const ChatContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.messageSideBar}>
      <Box>
        <Typography className={classes.username}>{'username'}</Typography>
        {true ? (
          <Typography className={classes.previewText}>{'latestMessageText'}</Typography>
        ) : (
          <Typography className={classes.previewTextSecondary}>{'latestMessageText'}</Typography>
        )}
      </Box>
      <Box>{true ? <Typography variant="body2">{'10:22AM'}</Typography> : null}</Box>
    </Box>
  );
};

export default ChatContent;
