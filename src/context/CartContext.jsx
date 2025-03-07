import React, { createContext, useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartCount: state.cartCount, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
