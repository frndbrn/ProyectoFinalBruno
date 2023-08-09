// Código creado por Fernando Bruno - Comisión 55735
import './App.css';
// importacion de mis componentes (el CartWidget lo importo dentro de Navbar)
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
//en el index.html de la carpeta public agregué el link y source de bootstrap, usado principalmente en los botones para darle estilo
//luego abajo uso el greeting como prop a enviar a ItemListContainer

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="Bienvenido a Coder Records!"/>
      </header>
    </div>
  );
}

export default App;
