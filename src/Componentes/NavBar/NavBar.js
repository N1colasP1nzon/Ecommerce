import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../CardWidger/CardWidger';
//import IconButton from '@mui/material/IconButton';
import './NavBar.css';


const NavBar = () => {
    return (
        <div className="menuinicial" >
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <div className='logoMenu'>
                <img src="./Login.jpeg"/>
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
                SDG Friendly
            </Typography>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Nuestras Frutas y Verduras</button>
                </li>
                <li>
                    <button>Nosotros</button>   
                </li>
            </ul>
            <CartWidget/>
            </Toolbar>
        </AppBar>
        </Box>
        </div> 
    )
}

export default NavBar