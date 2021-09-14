import React from 'react';
import { Box, Badge, Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import image from '../../helpers/image';

const useStyles = makeStyles(() => ({
  profilePic: {
    height: 44,
    width: 44,
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
  sidebar: {},
}));

const BadgeAvatar = () => {
  const classes = useStyles();
  //   const { sidebar, username, photoUrl, online } = props;

  return (
    <Box className={true ? classes.sidebar : ''}>
      <Badge
        classes={{ badge: `${classes.badge} ${true && classes.online}` }}
        variant="dot"
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        overlap="circle"
      >
        <Avatar alt={'username'} src={image} className={classes.profilePic}></Avatar>
      </Badge>
    </Box>
  );
};

export default BadgeAvatar;
