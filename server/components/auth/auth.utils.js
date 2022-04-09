const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../../utils/config");

//creating a password function to encrypt password into hash
module.exports.hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(5);
  return bcrypt.hashSync(password, salt);
};

//creating a password function to encrypt password into hash
module.exports.checkPassword = (password, hashpassword) => {
  return bcrypt.compareSync(password, hashpassword);
};

module.exports.generateToken = (payload) => {
  return jwt.sign(payload, secretKey, {
    expiresIn: "2 days",
  });
};

module.exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};
