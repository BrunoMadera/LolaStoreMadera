 import ItemCount from './ItemCount';
 
 
 // import the images

let prod1 = require('./images/produto1.jpg');
let prod2 = require('./images/produto2.jpg');
let prod3 = require('./images/produto3.jpg');
let prod4 = require('./images/produto4.jpg');


function ProductsCards() {
        return (



<section  className="container2"> 

    {/* <div className="titulo">Nossa melhor seleção para você</div> */}

    <div className="box1">
        <div className="card-group" style={{backgroundColor: "#fca32f",}}>
          <img src={prod1} class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Chapéus</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark">+ detalhes</a>
          </div>
        </div>
      <ItemCount />
    </div>

    <div className="box2">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",}}>
          <img src={prod2} class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Anéis</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark">+ detalhes</a>
          </div>
        </div>
      <ItemCount />
    </div>

    <div className="box3">
        <div className="card-group" style={{backgroundColor: "#fca32f",}}>
          <img src={prod3} class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Óculos</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark">+ detalhes</a>
          </div>
        </div>
      <ItemCount />
    </div>

    <div className="box4">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",}}>
          <img src={prod4} class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Relógios</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark">+ detalhes</a>
          </div>
        </div>
      <ItemCount />
    </div>
</section>

  );
}
 
export default ProductsCards;
