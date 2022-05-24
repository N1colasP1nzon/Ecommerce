import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../CardWidger/CardWidger';

const NavBar = () => {
    return (
        <div className="menuinicial">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <div className='logoMenu'>
                            <img  src="./Login.jpeg"/>
                        </div>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SDG Friendly
                        </Typography>
                        <ul>
                            <li>
                                <button>Inicio</button>
                            </li>
                            <li>
                                <button>Productos</button>
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