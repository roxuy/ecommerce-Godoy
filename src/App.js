import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {useState} from 'react';
import Button from '@restart/ui/esm/Button';

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Esto es un saludo">
      </ItemListContainer>
    </div>
  );
}

export default App;
