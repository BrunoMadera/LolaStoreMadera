// import the image

import CartWidget from './CartWidget';

let logoLola = require('./images/lolaStoreTransp.png');
let cartIco = require('./icons/cartIcon_32px.png');
      
function NavBar() {
        return (
    
<div className="container1">
  
  <nav className="navbar fixed-top bg-body-tertiary ">
    <div className="container-fluid" style={{backgroundColor: "#fca32f"}}>
        
        <div className="navbar-brand" id="nome" href="#" alt="nome" >
            <img className = "logo" src={logoLola} alt="logo" />
        </div>
          <a className="navbar-brand Tit1" id='nome' href="#">Lola Store, sua loja de roupas</a>
          <a className="navbar-brand Tit2" href="#">Produtos</a>
          <a className="navbar-brand Tit2" href="#">Contato</a>
          <a className="navbar-brand Tit2" href="#">
            <CartWidget />
          </a>
          <a className="navbar-brand Tit2" href="#">Log-In</a>
    </div>
  </nav>

</div>
 
  );
}
 
export default NavBar;
