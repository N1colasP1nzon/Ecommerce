import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/Producto/itemListContainer';

function App() {

  return (
    //JSX
    <div className="App">
      <NavBar/>
      <div className='Producto-Item'>
        <ItemListContainer className='Producto-Cards' title={'Verduras para el hogar'}/>
      </div>
    </div>
  );
}

export default App;
