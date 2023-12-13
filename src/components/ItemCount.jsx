import { useState } from 'react';

function ItemCount() {


    const [addCount, setContClique] = useState(0);

    function addCart() {
        setContClique(addCount + 1);

        return (addCount)
    }

    function removeCart() {

        if (addCount !== 0) {
            setContClique(addCount - 1);
        }
        
        return (addCount)
    }

    return (

        <div className="boxCounter">

            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={removeCart}>-</button>
                <input type="number" className="form-control txtCounter" placeholder="" input value={addCount} min="0" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addCart}>+</button>
            </div>
        </div>
    
     )


}

export default ItemCount;
