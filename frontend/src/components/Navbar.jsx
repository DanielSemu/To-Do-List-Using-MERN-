import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbar = () => {

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#000d1a' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            To Do List Application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Navbar;
