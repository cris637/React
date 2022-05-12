import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import useCartContext from "../context/CartContext";

const ItemDetail = ({ prenda }) => {
    const [isInCart, setisInCart] = useState(false);
    const {addToCart} = useCartContext();
    function onAdd(count){

        setisInCart(true)
        addToCart(prenda, count)
        console.log("agregado al cart", prenda, count);

      }

  // estilos al item
  const cardStyle = {
    backgroundColor: "#f4f4f4",
    border: "1px solid #e1e1e1",
    margin: "0 10px 10px 0",
    display: "inline-block",
    verticalAlign: "top",
    position: "relative",
    textAlign: "center",
    padding: "10px",
    boxSizing: "border-box",
    fontSize: "12px",
    lineHeight: "1.2",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1px",
    borderRadius: "3px",
  };

  const cardImg = {
    width: "600px",
  };

  return (
    <>
      <div className="item" style={cardStyle}>
        <div className="item-info">
          <img style={cardImg} src={prenda.img} alt="prenda.title" />
          <h3>{prenda.title}</h3>
          <p>Talle {prenda.talle} </p>
          <p>${prenda.precio}</p>
          { isInCart?
                    <button>Ver carrito</button>
                    :
                    <ItemCount onAdd={onAdd} stock={prenda.stock} initial={1} />
        }
          
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
