import './Producto.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';

const Producto = ({ image, title, price }) => {
    const[count,setCount] = useState (0)
    const addCount = () => {
        setCount(count + 1)
    }
    const restCount = () => {
        setCount(count - 1)
    }
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
                    <div className='cantidad'>
                        <Button onClick={restCount}>-</Button>
                        <strong>{count}</strong>
                        <Button onClick={addCount} >+</Button>
                    </div>
                    <Button variant={'contained'} >Mas info</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Producto