const md5 = require('md5');
const userValidate = require('../middlewares/userValidate');
const db = require('../database/models');
const { JwtServiceSign } = require('./JwtService');

const loginService = async (email, password) => {
  userValidate(email, password);
    const userDB = await db.User.findOne({ where: { email } });
    const passwordMd5 = md5(password);
  if (userDB.password !== passwordMd5) {
    const e = new Error('Incorrect email or password');
    e.name = 'NotFoundError';
    throw e;
  }

  const token = JwtServiceSign({
    id: userDB.id,
    email: userDB.email,
    role: userDB.role,
  });

  return token;
};
module.exports = loginService;