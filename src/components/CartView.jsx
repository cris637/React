import React from 'react'
import useCartContext from '../context/CartContext'
import { createBuyOrder } from '../data/index'

function CartView() {
const { cart, removeFromCart, clearCart, calcPrice } = useCartContext();

function handleBuy() {

  const itemsToBuy = cart.map((item) => ({
    title: item.title,
    cant: item.cant,
    price: item.precio,
    id: item.id,
  }
  
  ))

  const buyOrder = {
    buyer: {
      name: 'Cristián',
      phone: '3865394041',
      email: 'cristianabregu1@gmail.com',
    },
    items: itemsToBuy,
    total: calcPrice(),
  }
  
  createBuyOrder(buyOrder);

}


if (cart.lenght === 0) {
  return <div>
    <h3>No hay productos en el carrito</h3>
    <link to="/">Volver al catalogo</link>
  </div>
}
else {
  return <div> {cart.map( itemCart => {
      return <div key={itemCart.id}>
        <h2> {itemCart.title} </h2>
        <h2> {itemCart.cant} </h2>
        <h2> {itemCart.cant * itemCart.precio}</h2>
        <button onClick={()=>removeFromCart(itemCart.id)}>X</button>
        </div>
      
     })}

            <h2>Total de compra: ${calcPrice()} </h2>
             <button onClick={clearCart}>Vaciar Carrito</button>
             <button onClick={handleBuy}>Comprar</button>

    </div>
}
}

export default CartView