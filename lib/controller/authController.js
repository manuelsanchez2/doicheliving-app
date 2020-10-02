const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.authUser = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // extract email and password

  const { email, password } = req.body;

  try {
    // Check if there is an existing user
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    // Check the password
    const rightPassword = await bcryptjs.compare(password, user.password);
    if (!rightPassword) {
      return res.status(400).json({ msg: "Password es incorrecta" });
    }
    // If everything is okay, then create and sign the JWT

    const payload = {
      user: {
        id: user.id,
      },
    };
    // Sign the JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 3600, // 1h
      },
      (error, token) => {
        if (error) throw error;

        // Confirm message
        res.json({ token: token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
