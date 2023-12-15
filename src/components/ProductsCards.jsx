 import ItemCount from './ItemCount';
 
 
// produtos

let produto1, produto2, produto3, produto4;

let Produtos = [
produto1 = {
                Name:'Cropped',
                Stock : 'em estoque: ' + 15, 
                Value : 135,
                Picture: require('./images/produto1.jpg'),
                Category: "Roupas",
                Description: "A crop top is a kind of shirt. Crop tops do not cover all of the middle section of the wearer's body. A person wearing a crop top will have part of their belly and back showing. There are many kinds of crop tops, and most styles show the wearer's belly button."
                },
produto2 = {
                Name:'Anel Rubi',
                Stock : 'em estoque: ' + 23, 
                Value : 56,
                Picture: require('./images/produto2.jpg'),
                Category: "Acessórios",
                Description: "A typically circular band of metal or other durable material, especially one of gold or other precious metal, often set with gems, for wearing on the finger as an ornament, a token of betrothal or marriage, etc."
                },     
produto3 = {
                Name:'Jaqueta Jeans',
                Stock : 'em estoque: ' + 10, 
                Value : 290,
                Picture: require('./images/produto3.jpg'),
                Category: "Roupas",
                Description:"A denim jacket, also called a jean jacket or trucker jacket, is a jacket made from denim. Introduced in the United States in the late 19th century, it has been a popular type of casual apparel with both men and women and has been described as an iconic element of American fashion."
                },     
produto4 = {
                Name:'Relógio Rolex',
                Stock : 'em estoque: ' + 12, 
                Value : 560,
                Picture: require('./images/produto4.jpg'),
                Category: "Acessórios",
                Description: "Rolex watches are known for their quality and precision; made with the following eight fundamental qualities: Precision, Waterproofness, Autonomy, Robustness, Simplicity, Craftsmanship, Comfort, Durability. Rolex watches are made with high-quality materials, including: 904L stainless steel"
                },     
                ]



// checando filtros selecionados

// let ProdutosFiltrados;

      function readingBtn1() {

        let elRo = document.getElementById("btncheck1").checked;

        if(elRo === true){ elRo = true }else{elRo = false}

        console.log("Ro:"+ elRo)

        return elRo;
      
      }

        function readingBtn2() {

        let elAc = document.getElementById("btncheck2").checked;

        if(elAc === true){elAc = true}else{elAc = false};

        console.log("Ac:"+elAc)
        
        return elAc;

      }

  // function readingBtns() {

  //     let elRo = document.getElementById("btncheck1").checked;
  //     let elAc = document.getElementById("btncheck2").checked;

  //     if(elRo === true){

  //         const ProdutosFiltrados = Produtos.filter(function(Produtos) {
  //         return Produtos.Category === "Roupas" ;
  //         });

  //         ProdutosFiltrados.push("", "");
  //         console.log(ProdutosFiltrados);
  //     }

  //     if(elAc === true){

  //         const ProdutosFiltrados = Produtos.filter(function(Produtos) {
  //         return Produtos.Category === "Acessórios" ;
  //         });

  //         ProdutosFiltrados.push("", "");
  //         console.log(ProdutosFiltrados);
  //     }

  //     if(elRo === true && elAc === true){

  //         const ProdutosFiltrados = Produtos.filter(function(Produtos) {
  //         return Produtos.Category === "Roupas" || "Acessórios" ;
  //         });

  //         console.log(ProdutosFiltrados);
  //     }
  // }

      



// Função para filtrar

  const ProdutosFiltrados = Produtos.filter(function(Produtos) {
    // return Produtos.Category === "Roupas" || "Acessórios" ;

    // return Produtos.Category === "Roupas";


    return Produtos.Category === "Acessórios" ;



  });

  ProdutosFiltrados.push({
                Name:'',
                Stock : '', 
                Value : 0,
                Picture: require('./images/lolaStoreTransp.png'),
                Category: "",
                Description:"--"
                },
                {
                Name:'',
                Stock : '', 
                Value : 0,
                Picture: require('./images/lolaStoreTransp.png'),
                Category: "",
                Description:"--"
                });

  console.log(ProdutosFiltrados);


function ProductsCards() {
        return (

<section  className="container2"> 

<div className="titulo"><i>Filtre aqui as melhores categorias  </i> 

  <div className="btn-group btn-group-sm" role="g  roup" aria-label="Basic checkbox toggle button group ">
    <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" onClick={readingBtn1}></input>
    <label className="btn btn-outline-success" for="btncheck1">Roupas</label>

    <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"onClick={readingBtn2}></input>
    <label className="btn btn-outline-success" for="btncheck2">Acessórios</label>
  </div>

</div>

    <div className="box1">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={ProdutosFiltrados[0].Picture} className="card-img-top photo" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{ProdutosFiltrados[0].Name}</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer ">{ProdutosFiltrados[0].Stock}</small></h6>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto1" style={{color: 'white'}} >Adicionar ao Carrinho </button>
      </div>

      <div className="box2">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={ProdutosFiltrados[1].Picture} className="card-img-top photo" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{ProdutosFiltrados[1].Name}</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer ">{ProdutosFiltrados[1].Stock}</small></h6>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto2" style={{color: 'white'}} >Adicionar ao Carrinho </button>
      </div>

      <div className="box3">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={ProdutosFiltrados[2].Picture} className="card-img-top photo" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{ProdutosFiltrados[2].Name}</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer ">{ProdutosFiltrados[2].Stock}</small></h6>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto3" style={{color: 'white'}} >Adicionar ao Carrinho </button>
      </div>

      <div className="box4">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={ProdutosFiltrados[3].Picture} className="card-img-top photo" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{ProdutosFiltrados[3].Name}</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer ">{ProdutosFiltrados[3].Stock}</small></h6>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto4" style={{color: 'white'}} >Adicionar ao Carrinho </button>
      </div>

</section>


  );
}
 






export default ProductsCards;
