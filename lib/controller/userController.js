const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // extract email and password

  const { email, password } = req.body;

  try {
    // Check if there is an user with the email give
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Crear un nuevo usuario
    user = new User(req.body);

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);

    // Save the new user
    await user.save();

    // Create and sign the JWT
    // Create
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
    res.status(400).send("Hubo un error con el registro");
  }
};
