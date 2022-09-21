const md5 = require('md5');
const UserService = require('../services/userServises');

const create = async (req, res) => {
  const { name, email, password } = req.body;
 
  const passwordMd5 = md5(password);

  const newUser = await UserService.create({ name, email, password: passwordMd5 });

  res.status(201).json(newUser);
};

const list = async (req, res) => {
  const lista = await UserService.list();

  res.status(201).json(lista);
};

module.exports = { create, list };
