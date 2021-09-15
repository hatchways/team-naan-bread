import React from 'react';
import { Box, Badge, Avatar } from '@material-ui/core';
import image from '../../helpers/image';
import useStyles from './useStyles';

const BadgeAvatar = () => {
  const classes = useStyles();

  return (
    <Box>
      <Badge
        classes={{ badge: `${classes.badge} ${true && classes.online}` }}
        variant="dot"
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        overlap="circular"
      >
        <Avatar alt={'username'} src={image} className={classes.profilePic}></Avatar>
      </Badge>
    </Box>
  );
};

export default BadgeAvatar;
