const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor, introduce un nombre de usuario"],
    min: [6, "Tu nombre de usuario debe de ser algo más largo"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Por favor, introduce un email"],
    min: [6, "Por favor, introduce un email válido"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Por favor, introduce una contraseña"],
    min: [6, "Tu contraseña debe de ser algo más largo"],
    trim: true,
  },
  register: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
