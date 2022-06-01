import { useState , useEffect } from 'react';
import ProductosDetallados from "./ProductosDetallados"
import { producto1 } from "./Productos"

const ContenedorProductos = () => {
    const [productos1, setproductos1] = useState([])

    const getProducts = () => {
        return new Promise( (resolve,) => {
            setTimeout(() => {
                resolve(producto1)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
        .then((data) => {
            setproductos1(data)
        })
    }, [])

    return(
        <div>
            <ProductosDetallados data={productos1} />
        </div>
    )
}

export default ContenedorProductos