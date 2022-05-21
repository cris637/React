import React, { useState, useEffect } from 'react';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllItems as getDataFromDB, getItemsByTalle } from '../data/index.js'


// function getDataFromDB(talleid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (talleid === undefined) resolve(ropaData);
//       const ropaRequested = ropaData.filter ( (ropa)=>{
//         return ropa.talle === talleid;
//       })
//       resolve(ropaRequested);
//     }, 500);
//   });
// }








function ItemlistContainer({ titulo }) {
  
  

  const {talleid} = useParams();

  let [ropa, setRopa] = useState([]);

  useEffect(() => {
    if (talleid === undefined) {
      
    
    getDataFromDB(talleid).then( (data) => {
      setRopa(data);
  })
}
else {
  getItemsByTalle(talleid).then((data) => {
    setRopa(data);

});
 }
 } ,[talleid]);

return (
  <div>
    <h1> {titulo} </h1>
  <Itemlist ropa={ropa} />
  </div>

  )

}
export default ItemlistContainer 