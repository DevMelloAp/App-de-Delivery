const jwt = require('jsonwebtoken');
// const fs = require('fs');

// const senha =  fs.readFileSync("back-end/jwt.evaluation.key", "utf-8" );
// console.log(senha);

const JwtServiceSign =  (id, email) => {

  const token = jwt.sign({ id, email }, process.env.JWT_SECRET || "secret_key");
  return token;
};
  const JwtServiceSignDecode = (token) => {
    const tokenVerify = jwt.verify(token, process.env.JWT_SECRET || "secret_key");
    return tokenVerify;
  };

  module.exports = {
    JwtServiceSign,
    JwtServiceSignDecode,
  };
