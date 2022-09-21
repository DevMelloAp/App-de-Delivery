const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/userServises');
const { loginService } = require('../services/userServises');

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

const loginController = async (req, res) => {
  if (!req.body) {
    const e = new Error('Email and password is required');
    e.name = 'NotFoundError';
    throw e;
  }
  const { email, password } = req.body;

  const userInfo = await loginService(email, password);
 
  res.status(StatusCodes.OK).json(userInfo);
};

module.exports = { create, list, loginController };
