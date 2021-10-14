import { Button, Menu, Box, MenuItem } from '@material-ui/core';
import { useState, MouseEvent } from 'react';
import { Link as routerLink } from 'react-router-dom';

export default function PetEventsNavbarMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <Box padding={1} marginLeft={1}>
      <Button
        onClick={(e) => {
          handleClick(e);
        }}
        aria-controls="petEventsMenu"
        aria-haspopup="true"
      >
        events
      </Button>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="petEventsMenu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={routerLink} to="/events">
          events near you
        </MenuItem>
        <MenuItem component={routerLink} to="/event-form">
          create new event
        </MenuItem>
      </Menu>
    </Box>
  );
}
