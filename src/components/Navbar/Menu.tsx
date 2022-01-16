import React from 'react';
import { IconButton, Menu as MuiMenu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { routes } from '../../routes';
import { Link } from 'react-router-dom';

const listRoutes = [
  'dashboard',
  'categories.list',
]

const menuRoutes = routes.filter(route => listRoutes.includes(route.name))

export const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return <>
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpen}
      size="large">
        <MenuIcon />
      </IconButton>
      <MuiMenu id="menu-appbar"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}>
        {menuRoutes.map((route, key) => (
          <MenuItem key={key} onClick={handleClose}  component={Link} to={route.path as string}>{route.label}</MenuItem>
        ))}
      </MuiMenu>
  </>;
};