// import the image
import logoLola from '././lolaStoreTransparent.png';
      
function NavBar() {
        return (
    
<div className="container">
  
  <nav className="navbar fixed-top bg-body-tertiary">
    <div className="container-fluid">
        
        <div className="navbar-brand" id="nome" href="#" alt="nome">
            <img className = "logo" src={logoLola} alt="logo" />
        </div>
        <a className="navbar-brand Tit1" id="nome" href="#">Lola Store, sua loja de roupas</a>
        <a className="navbar-brand Tit2" id="link1" href="#">Produtos</a>
        <a className="navbar-brand Tit2" id="link2" href="#">Contato</a>
        <a className="navbar-brand Tit2" id="link3" href="#">Seu Carrinho</a>
        <a className="navbar-brand Tit2" id="link4" href="#">Log-In</a>

    </div>
  </nav>

</div>
 
  );
}
 
export default NavBar;
