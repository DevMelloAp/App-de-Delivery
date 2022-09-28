import { ADD_PRODUCT, GET_TOTAL } from './actionsTypes';

export const addNewPruduct = (data) => ({
  type: ADD_PRODUCT,
  data,
});

export const getCartTotal = () => ({
  type: GET_TOTAL,
});
