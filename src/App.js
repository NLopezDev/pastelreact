import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Mi Patisserie</h1>
      <ItemListContainer greeting="Productos"></ItemListContainer>
    </div>
  );
}

export default App;
