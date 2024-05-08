import React, { createContext, useState, useEffect } from "react";

const EcomContext = createContext();

const EcomProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);

  const userIsLoggedIn = !!token;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginHandler = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    setCart("");
  };
  
    useEffect(() => {
      const fetchCartData = async () => {
        try {
          const response = await fetch(
            "https://react-ecom-d1f93-default-rtdb.firebaseio.com/cartItems.json"
          );
          if (response.ok) {
            const data = await response.json();
            const cartData = data ? Object.values(data) : [];
            setCart(cartData);
          } else {
            throw new Error("Failed to fetch cart data from Firebase");
          }
        } catch (error) {
          console.error(error);
        }
      };
      if (userIsLoggedIn) { 
        fetchCartData();
      }
    }, [userIsLoggedIn]);
  
  const addToCartHandler = async (item) => {
    const isPresent = cart.some((product) => item.id === product.id);
    let updatedCart;
    if (isPresent) {
      updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedCart);
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
    }
    // Save the updated cart data to Firebase
    await fetch(
      "https://react-ecom-d1f93-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(updatedCart), // Sending the updatedCart
        headers: {
          "Content-type": "application/json",
        },
      }
    );
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

    // Save the updated cart data to Firebase
    saveCartToFirebase(updatedCart);
  };

  const saveCartToFirebase = async (updatedCart) => {
    await fetch(
      "https://react-ecom-d1f93-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(updatedCart),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
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
        logoutHandler,
        userIsLoggedIn,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export { EcomContext, EcomProvider };



