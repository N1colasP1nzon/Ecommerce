//productos cards
import './Producto.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

//Functional Component
const Producto = ({ image, title, price }) => {
    // console.log("Propiedades de Card: ")
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="lista-producto">
                    <div>
                        <img src={`./${image}`} /> 
                    </div>
                    <strong>{title}</strong>
                    <br></br>
                    <strong>$ {price}</strong>
                    <br></br>
                    <Button variant={'contained'} >Mas info</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Producto