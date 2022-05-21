import carrito from "../assets/img/bolsa.png";
import useCartContext from "../context/CartContext";
import react from "react";

function CartWidget() {
  const {cantInCart} = useCartContext();
  return (
    <div>
      <img src={carrito} alt="bolsa de compra" />
      <div> {cantInCart()}</div>
    </div>
  );
}

export default CartWidget;
