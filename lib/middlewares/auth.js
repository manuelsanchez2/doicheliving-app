// const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Read token in header
  const token = req.header("x-auth-token");
  console.log(token);

  // Check if there is NOT token

  // Validate token
};
