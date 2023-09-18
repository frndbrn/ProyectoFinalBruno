// Código creado por Fernando Bruno - Comisión 55735
import './App.css';
import Router from './router/Router';
import { db} from './firebase/client'
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';

function App() {

  const productRef = doc(db, "productos", "QgWLVMLKWtm4mLlfJ3oH")

  const getProduct = () => {
    getDoc(productRef).then((snapshot => {
      if(snapshot.exists()){
        console.log({ id: snapshot.id, ...snapshot.data()})
      }
    }))
  }

  useEffect(() => {
    getProduct()
  }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
  );
}

export default App;
