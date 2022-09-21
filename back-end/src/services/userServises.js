const { User } = require('../database/models');

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
    
  module.exports = { create, list };