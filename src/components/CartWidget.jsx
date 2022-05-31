import carrito from "../assets/img/bolsa.png";
import useCartContext from "../context/CartContext";
import react from "react";
import { Link } from 'react-router-dom';


function CartWidget() {
  const {cantInCart} = useCartContext();
  return (
    <div>
      <Link to='/cart'>
      <div> {cantInCart()} </div>
      <img src={carrito} alt="bolsa de compra" />
      </Link>
    </div>
    
  );
}

export default CartWidget;
