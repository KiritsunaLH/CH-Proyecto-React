
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const onAdd = (count) => {
    alert(`La cantidad es: ${count}`)
}

  return (
    <div className="App">
      <NavBar />
      <h1>Compone</h1>
      <ItemCount initial={1} onAdd={onAdd} />
    </div>
  );
}

export default App;
