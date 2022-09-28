import { combineReducers } from 'redux';
import user from './login';
import product from './products';

const rootReducer = combineReducers({
  product,
  user,
});

export default rootReducer;
