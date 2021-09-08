import { ChangeEvent, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import Search from '../Search/Search';
import AuthMenu from '../AuthMenu/AuthMenu';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import getProfile from '../../helpers/APICalls/getProfile';
import { ProfileApiData } from '../../interface/ProfileApiData';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const ChatSideBanner = ({ loggedInUser }: Props): JSX.Element => {
  const [search, setSearch] = useState<string>('test');
  const [newChatUser, setNewChatUser] = useState<User | null>(null);
  const classes = useStyles();
  const [photo, setPhoto] = useState<string | undefined>('');

  useEffect(() => {
    if (loggedInUser) {
      getProfile(loggedInUser.id).then((data: ProfileApiData) => {
        setPhoto(data.profilePhoto?.url);
      });
    }
  }, [loggedInUser]);

  // React.FormEvent<FormControl & FormControlProps>)
  const handleChange = (e: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
    setSearch(newInputValue);
    if (newChatUser) {
      setNewChatUser(null);
    }
  };

  return (
    <Grid className={classes.chatSideBanner}>
      <Box className={classes.userPanel}>
        <Link component={RouterLink} to="settings/profile">
          <AvatarDisplay loggedIn photo={photo} />
        </Link>
        <Typography className={classes.userText} variant="h5">
          {loggedInUser.username}
        </Typography>
        <AuthMenu />
      </Box>
      <Box>
        <Typography className={classes.chatTitle} variant="h5">
          Users
        </Typography>
        <Search search={search} handleChange={handleChange} />
      </Box>
    </Grid>
  );
};

export default ChatSideBanner;
