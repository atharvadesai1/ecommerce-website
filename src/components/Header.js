import React from 'react'
import {Box, AppBar, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import '../styles/Header.css';

function Header() {
  return (
    <>
      <Box>
        <AppBar component='nav' sx={{bgcolor:'black'}}>
          <Toolbar>
            <Typography color='white' component='div' variant='h6' sx={{flexGrow: 1} }>
            <RestaurantIcon sx={{position:'relative',top:'5px'}}/>
            &nbsp;Spice Spot</Typography>

            <Box sx={{display: {xs:'none', sm:'block'}}}>
              <ul className='navigation_bar'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/orders'}>Orders</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
