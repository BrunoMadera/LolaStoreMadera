// import the image

let cartIco = require('./icons/cartIcon_32px.png');
      
function CartWidget() {
        return (
  <div>
    <button type="button" class="btn position-relative">
      <img src={cartIco} alt=""></img>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
        4
      </span>
    </button>
  </div>
   );
}
 
export default CartWidget;
