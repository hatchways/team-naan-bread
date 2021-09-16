import { useAuth } from '../../context/useAuthContext';
import { Link } from 'react-router-dom';
import { Box, MenuList, MenuItem } from '@material-ui/core';

interface Props {
  url: string;
}

function SettingsMenu(props: Props): JSX.Element {
  return (
    <Box>
      <MenuList>
        <MenuItem>
          <Link to={`${props.url}/edit-profile`}>Edit Profile</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/settings/profile-photo">Profile Photo</Link>
        </MenuItem>
      </MenuList>
    </Box>
  );
}

export default SettingsMenu;
