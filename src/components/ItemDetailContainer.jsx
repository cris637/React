import React, { useState, useEffect } from 'react';
import ropaData from  '../data/ropaData';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function getDataFromDB(idRequested) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ropaRequested = ropaData.find( (ropa) =>{
        return ropa.id === Number(idRequested);
      })
      resolve(ropaRequested);
    }, 500);
  });
}

function ItemDetailContainer({ titulo }) {
 
  


  const { id } = useParams();
  let [prenda, setPrenda] = useState();

  useEffect(() => {
    getDataFromDB(id).then( (data) => {
      setPrenda(data);
  })
 }, []);

return (
  <div>
    <h1> {titulo} </h1>
  {<ItemDetail prenda={prenda} /> }
  </div>

  )

}
export default ItemDetailContainer 