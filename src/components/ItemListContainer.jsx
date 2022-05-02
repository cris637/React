// import ItemList from './ItemList';

// const ItemListContainer = (props) => {
//   return (
//     <>
//       <ItemList />
//     </>
//   );
// }

// export default ItemListContainer;

import React, { useState, useEffect } from 'react';
import ropaData from  '../data/ropaData';
import Itemlist from './ItemList';

function getDataFromDB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ropaData);
    }, 2000);
  });
}

function ItemlistContainer({ titulo }) {
  let [ropa, setRopa] = useState([]);
  console.log("render");

  useEffect(() => {
    getDataFromDB().then( (data) => {
      setRopa(data);
  })
 }, []);

return (
  <div>
    <h1> {titulo} </h1>
  <Itemlist ropa={ropa} />
  </div>

  )

}
export default ItemlistContainer 