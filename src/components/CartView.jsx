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
  return <div className="container text-center"> {cart.map( itemCart => {
      return <div key={itemCart.id}>
        
       <table className="table center">
  
  <tbody>
    <tr>
      <td scope="col">Producto: {itemCart.title}</td>
      <td scope="col">Cantidad: {itemCart.cant}</td>
      <td scope="col">Precio: {itemCart.cant * itemCart.precio}</td>
      <td scope="col"><button className="btn btn-danger" onClick={()=>removeFromCart(itemCart.id)}>X</button></td>

    </tr>
  </tbody>

</table>
        {/* <h4>Producto: {itemCart.title} </h4>
        <h4>Cantidad: {itemCart.cant} </h4>
        <h4>Precio: {itemCart.cant * itemCart.precio}</h4>
        <button className="btn btn-danger" onClick={()=>removeFromCart(itemCart.id)}>X</button> */}
        </div>
      
     })}

            <h2>Total de compra: ${calcPrice()} </h2>
             <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
             <button className="btn btn-dark" onClick={handleBuy}>Comprar</button>

    </div>
}
}

export default CartView