import React, { useState, useEffect } from 'react';
import ropaData from  '../data/ropaData';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';

function getDataFromDB(talleid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (talleid === undefined) resolve(ropaData);
      const ropaRequested = ropaData.filter ( (ropa)=>{
        return ropa.talle === talleid;
      })
      resolve(ropaRequested);
    }, 500);
  });
}

function ItemlistContainer({ titulo }) {
  
  const {talleid} = useParams();

  let [ropa, setRopa] = useState([]);
  console.log("render");

  useEffect(() => {
    getDataFromDB(talleid).then( (data) => {
      setRopa(data);
  })
 }, [talleid]);

return (
  <div>
    <h1> {titulo} </h1>
  <Itemlist ropa={ropa} />
  </div>

  )

}
export default ItemlistContainer 