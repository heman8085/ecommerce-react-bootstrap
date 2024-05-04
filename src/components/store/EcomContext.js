import React, { createContext, useState } from "react";
const EcomContext = createContext();

const EcomProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const loginHandler = (newToken) => {
  setToken(newToken);
  localStorage.setItem("token", token);
};

  const addToCartHandler = (item) => {
    const isPresent = cart.some((product) => item.id === product.id);
    if (isPresent) {
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const quantityChangeHandler = (item, change) => {
    const updatedCart = cart
      .map((cartItem) => {
        if (cartItem.id === item.id) {
          const newQuantity = Math.max(0, cartItem.quantity + change);
          return { ...cartItem, quantity: newQuantity };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity > 0);
    setCart(updatedCart);
  };
  const size = cart.length;
  return (
    <EcomContext.Provider
      value={{
        show,
        setShow,
        handleClose,
        handleShow,
        addToCartHandler,
        cart,
        quantityChangeHandler,
        size,
        loginHandler,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export { EcomContext, EcomProvider };
