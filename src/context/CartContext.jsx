import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
