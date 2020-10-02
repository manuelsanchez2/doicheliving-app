const { Router } = require("express");
const router = Router();

const Spot = require("../models/spots");

router.get("/", async (req, res) => {
  try {
    const spots = await Spot.find();
    if (!spots) return res.status(400).send("No hay spots en el mapa");
    res.send(spots);
  } catch (error) {
    res.status(500).send("Hay un problema interno con el servidor");
  }
});
module.exports = router;
