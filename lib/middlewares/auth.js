const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Read token in header
  const token = req.header("x-auth-token");
  console.log(token);

  // Check if there is NOT token
  if (!token) {
    return res.status(401).json({ msg: "No Token, no puedes hacer esto" });
  }
  // Validate token

  try {
    const cipher = jwt.verify(token, process.env.JWT_SECRET);
    req.user = cipher.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Este Token no vale" });
  }
};
