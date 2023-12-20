import './App.css';
import NavBar from './components/NavBar';
import ProductsCards from './components/ProductsCards';
import ItemListContainer from './components/ItemListContainer';
import GetData from './components/GetData';


function App() {
  return (
    <div className="App">
    <GetData />
    <nav><NavBar /></nav>
    
    <body>
    
    <section><ProductsCards />
              
    </section>

    <section>

    
    </section>
  
    </body>

    <footer></footer>

    </div>

  );
}

export default App;