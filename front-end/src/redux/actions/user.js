import { REMOVE_USER, SET_EMAIL, SET_USER_LIST } from './actionsTypes';

export const setUserEmail = (data) => ({
  type: SET_EMAIL,
  data,
});

export const setUserList = (data) => ({
  type: SET_USER_LIST,
  data,
});

export const removeUser = (data) => ({
  type: REMOVE_USER,
  data,
});
