const initialState = {
  cart: [],
  total: 0,
  seller: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_PRODUCT':
    if (state.cart.length === 0) {
      return { ...state, cart: [action.data] };
    }
    return { ...state,
      cart: [...state.cart
        .filter((productCart) => productCart.id !== action.data.id), action.data] };
  case 'GET_TOTAL':
    if (state.cart.length !== 0) {
      return { ...state,
        total: state.cart
          .reduce((acc, curr) => {
            acc += curr.price * curr.quantity;
            return acc;
          }, 0),
      };
    }
    return { ...state, total: 0 };
  case 'REMOVE_PRODUCT':
    if (state.cart.length === 0) {
      return { ...state, cart: [action.data] };
    }
    return { ...state,
      cart: [...state.cart
        .filter((productCart) => productCart.id !== action.data.id)] };
  case 'ADD_SELLER':
    return { ...state, seller: action.data };
  default:
    return state;
  }
};

export default productReducer;
