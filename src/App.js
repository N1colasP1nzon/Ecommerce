import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/Producto/itemListContainer';
import { useState , useEffect } from 'react';
import productos from './Componentes/Producto/Productos';
import ContenedorProductos from './Componentes/Producto/ContenedorProducto';

function App() {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}  

  useEffect( () => {
      getProducts()
      .then( (response) => {
          setProducts(response)
      })
      .catch( (err) => {
      })
      .finally( () => {
      })
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <div className='Producto-Item'>
        <ItemListContainer title={'Productos D30'} products={productos}/>
      </div>
      <div>
        <ContenedorProductos/>
      </div>
    </div>
  );
}

export default App;
