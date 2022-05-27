import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/Producto/itemListContainer';
import { useState , useEffect } from 'react';
import Modal from './Componentes/Modal/Modal';
import Producto from './Componentes/Producto/Producto';

function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const [products, setProducts] = useState([])
  const productos = [
    {
        title : 'Maiz',
        price : 150,
        image : './imagenes/maiz.jpg',
        description : '',
        stock : 2,
        id : 1
    },
    {
        title : 'Frutilla',
        price : 500,
        image : './imagenes/frutilla.jpg',
        description : '',
        stock : 3,
        id : 2
    },
    {
        title : 'Lechuga',
        price : 200,
        image : './imagenes/lechuga.jpg',
        description : '',
        stock : 5,
        id : 3
    },
    {
        title : 'Papas',
        price : 300,
        image : './imagenes/papas.jpg',
        description : '',
        stock : 10,
        id : 4
    },
  ]

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
        <ItemListContainer title={'Productos para el Hogar'} products={productos}/>
      </div>
    </div>
  );
}

export default App;
