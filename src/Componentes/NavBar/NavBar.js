import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
import './NavBar.css';


const NavBar = () => {
    return (
        <div className="navbar" >
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <div className='logoMenu'>
                <img src="./Login.jpeg"/>
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                SDG Friendly
            </Typography>
            <Button color="inherit">Ingresar</Button>
            </Toolbar>
        </AppBar>
        </Box>
        </div> 
    )
}

export default NavBar