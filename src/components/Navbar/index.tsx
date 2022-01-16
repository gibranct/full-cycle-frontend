import React from 'react';
import { AppBar, Button, Theme, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import logo from '../../static/img/logo.png';
import { Menu } from './Menu';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    backgroundColor: '#000000',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    [theme.breakpoints.up('sm')]: {
      width: 170,
    }
  },
}))

export const Navbar: React.FC = () => {

  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Menu />
        <Typography className={classes.title}>
          <img src={logo} alt="CodeFlix" className={classes.logo} />
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};