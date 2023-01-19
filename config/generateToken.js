const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, `SecretKey123`, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
