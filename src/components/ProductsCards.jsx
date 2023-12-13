 import ItemCount from './ItemCount';
 
 
// produtos

let produto1 = {
                Name:'Cropped',
                Stock : 'In stock: ' + 15, 
                Value : 135,
                Picture: require('./images/produto1.jpg'),
                Description: "A crop top is a kind of shirt. Crop tops do not cover all of the middle section of the wearer's body. A person wearing a crop top will have part of their belly and back showing. There are many kinds of crop tops, and most styles show the wearer's belly button."
                };
let produto2 = {
                Name:'Ring',
                Stock : 'In stock: ' + 23, 
                Value : 56,
                Picture: require('./images/produto2.jpg'),
                Description: "A typically circular band of metal or other durable material, especially one of gold or other precious metal, often set with gems, for wearing on the finger as an ornament, a token of betrothal or marriage, etc."
                };     
let produto3 = {
                Name:'Jeans Jacket',
                Stock : 'In stock: ' + 10, 
                Value : 290,
                Picture: require('./images/produto3.jpg'),
                Description:"A denim jacket, also called a jean jacket or trucker jacket, is a jacket made from denim. Introduced in the United States in the late 19th century, it has been a popular type of casual apparel with both men and women and has been described as an iconic element of American fashion."
                };     
let produto4 = {
                Name:'Watch',
                Stock : 'In stock: ' + 12, 
                Value : 560,
                Picture: require('./images/produto4.jpg'),
                Description: "Rolex watches are known for their quality and precision; made with the following eight fundamental qualities: Precision, Waterproofness, Autonomy, Robustness, Simplicity, Craftsmanship, Comfort, Durability. Rolex watches are made with high-quality materials, including: 904L stainless steel"
                };     


function ProductsCards() {
        return (



<section  className="container2"> 

    <div className=" box1">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={produto1.Picture} className="card-img-top photo" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{produto1.Name}</h5>
            <p className="card-text"></p>
            {/* <h6 className="card-text"><small className="text-muted">{produto1.Description}</small></h6> */}
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer">{produto1.Stock}</small></h6>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto1" style={{color: 'white'}} >Adicionar ao Carrinho </button>
      </div>

    <div className="box2">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={produto2.Picture} className="card-img-top photo" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">{produto2.Name}</h5>
            {/* <h6 className="card-text"><small className="text-muted">{produto2.Description}</small></h6> */}
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer">{produto2.Stock}</small></h6>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto2" style={{ color: 'white' }} >Adicionar ao Carrinho </button>
    </div>

    <div className="box3">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={produto3.Picture} className="card-img-top photo" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">{produto3.Name}</h5>
            {/* <h6 className="card-text"><small className="text-muted">{produto3.Description}</small></h6> */}
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer">{produto3.Stock}</small></h6>
          </div>
        </div>
      <div style={{margin: '8px'}} />
      <ItemCount />
        <button className="btnCounter" id="btnProduto3" style={{ color: 'white' }} >Adicionar ao Carrinho </button>
    </div>

    <div className="box4">
        <div className="card-group" style={{backgroundColor: "#fc6f2f",borderRadius: '0.3rem'}}>
          <img src={produto4.Picture} className="card-img-top photo" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">{produto4.Name}</h5>
            {/* <h6 className="card-text"><small className="text-muted">{produto4.Description}</small></h6> */}
            <p className="card-text"></p>
            <a href="#" className="btn btn-dark" style={{margin:'8px'}}>+ detalhes</a>
            <h6 className="card-text"><small className="text-muted blockquote-footer">{produto4.Stock}</small></h6>
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
