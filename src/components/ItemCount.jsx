import {useState} from 'react';

function ItemCount() {

const [addCount, setContClique] = useState(0);

function addCart (){
    setContClique(addCount + 1 );
}

function removeCart (){
    setContClique(addCount - 1 );
}

return (
<div className="boxCounter">
    <p className="txtCounter" > Quantidade: {addCount}</p>
        <button className="btnCounter" onClick = {addCart}> + </button> 
        <button className="btnCounter" onClick = {removeCart}> - </button> 
</div>
)


}

export default ItemCount;
