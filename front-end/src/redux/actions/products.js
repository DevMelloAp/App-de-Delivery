import { ADD_PRODUCT, GET_TOTAL, REMOVE_PRODUCT } from './actionsTypes';

export const addNewPruduct = (data) => ({
  type: ADD_PRODUCT,
  data,
});

export const getCartTotal = () => ({
  type: GET_TOTAL,
});

export const removeProduct = (data) => ({
  type: REMOVE_PRODUCT,
  data,
});
