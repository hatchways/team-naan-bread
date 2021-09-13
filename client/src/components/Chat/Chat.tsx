import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import ChatContent from './ChatContent';
import BadgeAvatar from './BadgeAvatar';
import useStyles from './useStyles';

const Chat = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box boxShadow={1} className={classes.sideBarChat}>
      <Box className={classes.chatRoot}>
        <BadgeAvatar />
        <ChatContent />
      </Box>
    </Box>
  );
};

export default Chat;
