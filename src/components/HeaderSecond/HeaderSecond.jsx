import React from 'react';
// import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import useStyle from './style'



function Header_2() {
   const classes = useStyle()
  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
              Travel  advisor
          </Typography>
          <Box display="flex">
          <Typography variant='h6' className={classes.title}>
              Explore new places
          </Typography> 
      
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                     <SearchIcon/>
                  </div>
                  <InputBase placeholder='Search...' classes={{root: classes.inputRoot, input: classes.inputInput}}/>
              </div>
        
          </Box>
        </Toolbar>

    </AppBar>
  )
}

export default Header_2