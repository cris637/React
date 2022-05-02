// // Importar la data de ropa
// import { useEffect, useState } from 'react';
// import data from '../data/ropaData.js';
// import Item from './Item.jsx';

// const ItemList = () => {


    
    
//     return (
//         <>
//             {data.map(item => (
//                 <Item key={item.id} item={item} />
//             ))}
//         </>
//     )
// }

// export default ItemList;

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