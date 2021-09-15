import { useAuth } from '../../context/useAuthContext';
import { Link } from 'react-router-dom';
import { Box, MenuList, MenuItem } from '@material-ui/core';

function UserSettingsMenu(): JSX.Element {
  return (
    <Box>
      <MenuList>
        <MenuItem>Hola</MenuItem>
      </MenuList>
    </Box>
  );
}

export default UserSettingsMenu;
