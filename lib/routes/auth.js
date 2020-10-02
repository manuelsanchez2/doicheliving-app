// Ruta para autentificar usuario

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controller/authController");

// api/auth
router.post(
  "/",
  [
    check("email", "Por favor, inserta un email válido").isEmail(),
    check(
      "password",
      "La contraseña debe tener un mínimo de 6 caracteres"
    ).isLength({ min: 6 }),
  ],
  authController.authUser
);

module.exports = router;
