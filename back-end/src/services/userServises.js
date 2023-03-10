const { Op } = require('sequelize');
const md5 = require('md5');
const { User } = require('../database/models');
const userValidate = require('../middlewares/userValidate');
const registerValidate = require('../middlewares/registerValidate');
const db = require('../database/models');
const { JwtServiceSign } = require('./JwtService');

const create = async ({ name, email, password, role }) => {
  registerValidate(email, password, name);

  let newRole = '';
  if (!role) newRole = 'customer';
  else newRole = role;
  const foundEmail = await User.findOne({ where: { email } });
  const foundName = await User.findOne({ where: { name } });
  
  if (foundEmail || foundName) {
    const e = new Error('User already registered');
    e.name = 'ConflictError';
    throw e;
  }
  
  const user = await User.create({ name, email, password, role: newRole });  
  
  const token = JwtServiceSign({ id: user.id, email: user.email });

  return { name: user.name, email: user.email, role: user.role, token };
};

const loginService = async (email, password) => {
  userValidate(email, password);
    const userDB = await db.User.findOne({ where: { email } });
  if (!userDB) {
    const e = new Error('User not found');
    e.name = 'NotFound';
    throw e;
  }
    const passwordMd5 = md5(password);
  if (userDB.password !== passwordMd5) {
    const e = new Error('Incorrect email or password');
    e.name = 'NotFoundError';
    throw e;
  }

  const token = JwtServiceSign({ id: userDB.id, email: userDB.email });

  return { id: userDB.id, name: userDB.name, email: userDB.email, role: userDB.role, token };
};

const list = async () => {
  const users = await User
  .findAll({ where: { [Op.or]: [{ role: 'customer' }, { role: 'seller' }] } });
  
  return users;
};

const listSellers = async () => {
  const users = await User.findAll({ where: { role: 'seller' } });
  
  return users;
};

const removeUser = async (email) => {
  const users = await User.destroy({ where: { email } });
  
  return users;
};

const getSeller = async (idSeller) => {
  const seller = await User.findByPk(idSeller);
  
  return seller;
};

module.exports = { create, loginService, list, listSellers, getSeller, removeUser };
