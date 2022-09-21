const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/userServises');

const loginController = async (req, res) => {
  if (!req.body) {
    const e = new Error('Email and password is required');
    e.name = 'NotFoundError';
    throw e;
  }
  const { email, password } = req.body;

  const token = await loginService(email, password);
 
  res.status(StatusCodes.OK).json({ token });
};
module.exports = loginController;