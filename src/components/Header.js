
import React from 'react'
import {Box, AppBar, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import '../styles/Header.css';

function Header() {
  return (
    <>
      <Box>
        <AppBar component='nav' sx={{bgcolor:'transparent'}}>
          <Toolbar>
            <Typography className="logo_text" color='white' component='div' variant='h6' sx={{flexGrow: 1,fontFamily:'headerr1',fontWeight:'bold'} }>
            <RestaurantIcon sx={{position:'relative',top:'5px'}}/>
            &nbsp;Spice Spot</Typography>

            <Box sx={{display: {xs:'none', sm:'block'}}}>
              <ul className='navigation_bar'>
                <li>
                  <Link to={'/'}>HOME</Link>
                </li>
                <li>
                  <Link to={'/about'}>ABOUT</Link>
                </li>
                <li>
                  <Link to={'/menu'}>MENU</Link>
                </li>
                <li>
                  <Link to={'/orders'}>ORDERS</Link>
                </li>
                <li>
                  <Link to={'/contact'}>CONTACT</Link>
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
