import { Link } from 'react-router-dom';
import { Box, MenuList, MenuItem } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  url: string;
}

function SettingsMenu(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} settings-menu`}>
      <MenuList>
        <MenuItem>
          <Link to={`${props.url}`}>Edit Profile</Link>
        </MenuItem>
        <MenuItem>
          <Link to={`${props.url}/profile-photo`}>Profile Photo</Link>
        </MenuItem>
        <MenuItem>
          <Link to={`${props.url}/availability`}>Availability</Link>
        </MenuItem>
        <MenuItem>
          <Link to={`${props.url}/payment`}>Payment</Link>
        </MenuItem>
        <MenuItem>
          <Link to="">Security</Link>
        </MenuItem>
        <MenuItem>
          <Link to="">Settings</Link>
        </MenuItem>
      </MenuList>
    </Box>
  );
}

export default SettingsMenu;
