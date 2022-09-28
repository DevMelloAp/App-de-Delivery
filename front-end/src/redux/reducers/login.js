const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_EMAIL':
    return { ...state, email: action.data };
  default:
    return state;
  }
};
export default userReducer;
