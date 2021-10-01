import { ChangeEvent, useState, useEffect, SyntheticEvent } from 'react';
import useStyles from './useStyles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ProfileApiData } from '../../interface/ProfileApiData';
import { Box, Paper, Typography, Divider, CardMedia, Avatar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

interface Props {
  profile: ProfileApiData;
}
const ProfileListing = ({ profile }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.listing}>
      <Box className={classes.avatarHolder}>
        <Avatar className={classes.avatar} src={profile.profilePhoto?.url} />
      </Box>
      <Typography className={classes.firstName} component="h1" variant="h5">
        {profile.firstName} {profile.lastName}
      </Typography>
      <Divider />
      <Rating className={classes.ratings} name="size-large" defaultValue={2} size="large" />
      <Typography className={classes.describeYourself}>{profile.describeYourself}</Typography>
      <Typography className={classes.whereYouLive}>{profile.whereYouLive}</Typography>
    </Box>
  );
};

export default ProfileListing;
