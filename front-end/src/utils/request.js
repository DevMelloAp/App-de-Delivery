import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const register = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const registerByAdm = async (body, token) => {
  const endpoint = '/register/admin';
  const headers = { headers: { Authorization: token } };
  const { data } = await api.post(endpoint, body, headers);
  return data;
};

export const createSales = async (endpoint, body, token) => {
  const headers = { headers: { Authorization: token } };
  const { data } = await api.post(endpoint, body, headers);

  return data;
};

export const removeUserRequest = async (email) => {
  await api.post('/users/remove', { email });
};

export const getOrderByUser = async (endpoint, saleId) => {
  const { data } = await api.get(endpoint, { params: { id: saleId } });

  return data;
};

export const getSellerById = async (endpoint, sellerId) => {
  const { data } = await api.get(endpoint, { params: { id: sellerId } });

  return data;
};

export const getUser = async (endpoint) => {
  const { data } = await api.get(endpoint);

  return data;
};

export default api;
