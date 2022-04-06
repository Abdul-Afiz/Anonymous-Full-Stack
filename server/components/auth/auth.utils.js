const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../../utils/config");

//creating a password function to encrypt password into hash
module.exports.hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(5);
  return bcrypt.hashSync(password, salt);
};

module.exports.generateToken = (payload) => {
  return jwt.sign(payload, secretKey, {
    expiresIn: "2 days",
  });
};
