const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/userServises');
const { loginService } = require('../services/userServises');
const { JwtServiceSignDecode } = require('../services/JwtService');

const create = async (req, res) => {
  const { name, email, password } = req.body;

  const passwordMd5 = md5(password);
  const newUser = await UserService.create({ name, email, password: passwordMd5 });

  res.status(201).json(newUser);
};

const createAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;
  const token = req.headers.authorization;
 try {
   const validateToken = JwtServiceSignDecode(token); 
 } catch (error) {
     const e = new Error('Invalid token');
     e.name = 'NotFoundError';
     throw e; 
  }
  const passwordMd5 = md5(password);
  const newUser = await UserService.create({ name, email, password: passwordMd5, role });

  res.status(201).json(newUser);
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

const list = async (req, res) => {
  const users = await UserService.list();
  
  res.status(StatusCodes.CREATED).json(users);
};

const listSellers = async (req, res) => {
  const users = await UserService.listSellers();
  
  res.status(StatusCodes.CREATED).json(users);
};

const removeUser = async (req, res) => {
  const { email } = req.body;
  const users = await UserService.removeUser(email);
  
  res.status(StatusCodes.OK).json({mensage: 'Usuário excluido'});
};

module.exports = { create, loginController, list, listSellers, createAdmin, removeUser };
