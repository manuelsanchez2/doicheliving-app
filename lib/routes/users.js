const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Por favor, inserta un email válido").isEmail(),
    check(
      "password",
      "La contraseña debe tener un mínimo de 6 caracteres"
    ).isLength({ min: 6 }),
  ],
  userController.createUser
);

module.exports = router;
