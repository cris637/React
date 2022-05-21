import { createContext } from "react";
import { useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.cant += cant;
          return copyItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((itemCart) => itemCart.id === id);
  };

  const getItemFromCart = (id) => {
    return cart.find((itemCart) => itemCart.id === id);
  };

  const cantInCart = () => {
    let ctotal = 0;
    cart.forEach( itemCart => ctotal += itemCart.cant);
    return ctotal;
  };

  const calcPrice = () => {
    let pTotal = 0;
    cart.forEach(itemCart => pTotal += (itemCart.precio * itemCart.cant) )
    return pTotal;
  }
  
  
  const contextFunction = () => console.log("Contexto Listo");
  return (
    <Provider
      value={{ contextFunction,getItemFromCart , cart, addToCart, removeFromCart, clearCart, cantInCart, calcPrice }}
    >
      {children}
    </Provider>
  );
}

export default useCartContext;
