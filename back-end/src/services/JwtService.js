const jwt = require('jsonwebtoken');

const JwtServiceSign = (id, email) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET || 'jwt_secret');
  return token;
};
  const JwtServiceSignDecode = (token) => {
    const tokenVerify = jwt.verify(token, process.env.JWT_SECRET || 'jwt_secret');
    return tokenVerify;
  };

  module.exports = {
    JwtServiceSign,
    JwtServiceSignDecode,
  };
