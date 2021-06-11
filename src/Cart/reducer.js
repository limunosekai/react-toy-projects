const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case 'INCREASE_ITEM':
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          };
        }
        return cartItem;
      });

      return {
        ...state,
        cart: tempCart,
      };
    case 'DECREASE_ITEM':
      let tempCart2 = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);

      return {
        ...state,
        cart: tempCart2,
      };
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
        amount,
      };
    default:
      return state;
  }
};

export default reducer;
