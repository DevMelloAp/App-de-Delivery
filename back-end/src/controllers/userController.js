const login = (_req, _res) => {
  const e = new Error('Erro teste');
  e.name = 'NotFoundError';
  throw e;
};
module.exports = login;