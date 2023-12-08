 import ItemCount from './ItemCount';
 
 
 // import the images

let prod1 = require('./images/produto1.jpg');
let prod2 = require('./images/produto2.jpg');
let prod3 = require('./images/produto3.jpg');
let prod4 = require('./images/produto4.jpg');


function ProductsCards() {
        return (



<section  className="container2"> 

    <div className=" box1">
        <div className="card-group" style={{backgroundColor: "#fca32f",borderRadius: '0.375rem'}}>
          <img src={prod1} className="card-img-top photo" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Chapéus</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{marginBottom:'15px'}}>+ detalhes</a>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto1" style={{color: 'white'}} >Adicionar ao Carrinho </button>
      </div>

    <div className="box2">
        <div className="card-group" style={{backgroundColor: "#fc6f2f", borderRadius: '0.375rem'}}>
          <img src={prod2} className="card-img-top photo" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">Anéis</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{marginBottom:'15px'}}>+ detalhes</a>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto2" style={{ color: 'white' }} >Adicionar ao Carrinho </button>
    </div>

    <div className="box3">
        <div className="card-group" style={{backgroundColor: "#fca32f",borderRadius: '0.375rem'}}>
          <img src={prod3} class="card-img-top photo" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">Óculos</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{marginBottom:'15px'}}>+ detalhes</a>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto3" style={{ color: 'white' }} >Adicionar ao Carrinho </button>
    </div>

    <div className="box4">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.375rem'}}>
          <img src={prod4} class="card-img-top photo" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">Relógios</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{marginBottom:'15px'}}>+ detalhes</a>
          </div>
        </div>
        <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto4" style={{ color: 'white', }} >Adicionar ao Carrinho </button>
    </div>
</section>

  );
}
 
export default ProductsCards;
