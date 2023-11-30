import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProductsCards from './components/ProductsCards';


function App() {
  return (
    <div className="App">
    
    <nav><NavBar /></nav>
    
    <body>
    
    <section><ProductsCards /></section>
    
    </body>

    <footer></footer>

    </div>

  );
}

export default App;