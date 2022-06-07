import React, { useState } from "react";

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function handleAdd(){
        if (count < props.stock) setCount(count + 1);
    }
    
    function handleSubstract(){
        if (count > 1) setCount(count - 1);
    }

   
    return (
        <div>
            <h1>Compra tus productos</h1>
        <div>
        <button onClick={handleSubstract}>-</button>
        <span> {count} </span>
        <button onClick={handleAdd}>+</button>
        </div>
        <div>
            <button className="btn btn-dark mt-2" onClick={()=> props.onAdd(count)}>Agregar al carrito</button>
        </div>

        </div>
    );
}

export default ItemCount;