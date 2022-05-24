import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/Producto/itemListContainer';
import { useState } from 'react';
import Modal from './Componentes/Modal/Modal';

function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <NavBar/>
      <div className='Producto-Item'>
        <ItemListContainer className='Producto-Cards' title={'Productos Principales'}/>
        <ItemListContainer className='Producto-Cards' title={'Productos Escenciales'}/>
      </div>
{/*       <button onClick={() => setOpen(true)}>Abrir modal</button>
      <Modal handleClose={handleClose} open={open} /> */}
    </div>
  );
}

export default App;
