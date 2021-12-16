import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import AppRoutes from './routes/AppRoutes';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />

    </div>
  );
}

export default App;

//<ItemListContainer greeting="Esto es un saludo">
//</ItemListContainer>