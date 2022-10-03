const initialState = {
  email: '',
  userList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_EMAIL':
    return { ...state, email: action.data };

  case 'SET_USER_LIST':
    return { ...state, userList: action.data };

  case 'REMOVE_USER':
    return { ...state,
      userList: state.userList
        .filter((user) => user.email !== action.data) };
  default:
    return state;
  }
};
export default userReducer;
