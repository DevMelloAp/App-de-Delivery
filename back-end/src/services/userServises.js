const md5 = require('md5');
const { User } = require('../database/models');
const userValidate = require('../middlewares/userValidate');
const db = require('../database/models');
const { JwtServiceSign } = require('./JwtService');

    const create = async ({ name, email, password }) => {
      const role = 'customer';
      const usersList = await User.findAll();
          const userList = usersList.map((it) => it.email);
  
          if (userList.includes(email)) {
              const e = new Error('User already registered');
              e.name = 'ConflictError';
              throw e;
          }
  
      const user = await User.create({ name, email, password, role });
     
      return user;
    };

    const list = async () => {
        const usersList = await User.findAll();
       
        return usersList;
    };

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
  });

  return {
    name: userDB.name,
    email: userDB.email,
    role: userDB.role,
    token };
};

 module.exports = { create, list, loginService };
