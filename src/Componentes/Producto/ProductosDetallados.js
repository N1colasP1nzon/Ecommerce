import './Producto.css'
import { Button } from '@mui/material';
import { useState } from 'react';

const ProductosDetallados = ({data}) => {
    console.log("Detalle del producto1 ", data)
    const [count, setCount] = useState(1)
    
    const addCount = () => {
        console.log("stock: ", data.stock)
        if(count < data.stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div className="ProductoDetallado">
            <div>
                <strong>{data.title}</strong>
                <br></br>
                <span>$ {data.price}</span> 
            </div>
            <div>
                <img src={`./${data.image}`}/>
            </div>
            <div>
                <Button onClick={removeCount}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <Button variant={'contained'} color='warning'>Agregar al carrito</Button>
        </div>
    )
}

export default ProductosDetallados