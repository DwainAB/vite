const cartCount = 0;

const cartReducer = (state = { cartCount }, action) => {
  switch (action.type) {
    case 'increment':
      return { cartCount: state.cartCount + 1 };
    case 'decrement':
      return { cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0 };
    default:
      return state;
  }
};

export { cartCount, cartReducer };