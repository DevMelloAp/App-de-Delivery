const md5 = require('md5');
const { User } = require('../database/models');

const userValidate = require('../middlewares/userValidate');
const registerValidate = require('../middlewares/registerValidate');
const db = require('../database/models');
const { JwtServiceSign } = require('./JwtService');

const create = async ({ name, email, password }) => {
  registerValidate(email, password, name);
    const role = 'customer';
    const foundEmail = await User.findOne({ where: { email } });
    const foundName = await User.findOne({ where: { name } });
  
  if (foundEmail || foundName) {
    const e = new Error('User already registered');
    e.name = 'ConflictError';
    throw e;
  }

  const user = await User.create({ name, email, password, role });

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

  return {id: userDB.id, name: userDB.name, email: userDB.email, role: userDB.role, token };
};

 module.exports = { create, loginService };
