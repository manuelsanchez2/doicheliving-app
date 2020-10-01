const User = require("../models/users");

exports.createUser = async (req, res) => {
  // extract email and password

  const { email, password } = req.body;
  console.log(password);

  try {
    // Check if there is an user with the email give
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Crear un nuevo usuario
    user = new User(req.body);

    // Save the new user
    await user.save();
    res.json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error con el registro");
  }
};
