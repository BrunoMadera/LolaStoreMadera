import './App.css';
import NavBar from './components/NavBar';
import ProductsCards from './components/ProductsCards';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
    
    <nav><NavBar /></nav>
    
    <body>
    
    <section><ProductsCards /></section>

    <section>
      <ItemListContainer />
    </section>
  
    </body>

    <footer></footer>

    </div>

  );
}

export default App;