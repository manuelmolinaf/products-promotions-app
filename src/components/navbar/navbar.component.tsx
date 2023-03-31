
import {useState, MouseEvent} from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import { ThemeProvider, createTheme } from '@mui/material/styles';


function NavBar() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" sx={{marginBottom:'20px'}} >
          <Toolbar>
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Products & Promotions
            </Typography>
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}
export default NavBar;