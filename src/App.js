import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import Button from '@restart/ui/esm/Button';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Esto es un saludo">
      </ItemListContainer>
    </div>
  );
}

export default App;
