import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
//import Button from '@restart/ui/esm/Button';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />

    </div>
  );
}

export default App;

//<ItemListContainer greeting="Esto es un saludo">
//</ItemListContainer>