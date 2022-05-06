import React from 'react';
import Item from './Item'

function ItemList ( {ropa}) {

return (
    <div>
        {ropa.map ( (ropaIterada)=> 
        <Item key={ropaIterada.id} ropa={ropaIterada}/>
        )}
    </div>
)
}

export default ItemList 