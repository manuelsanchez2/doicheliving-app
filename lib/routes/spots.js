const { Router } = require("express");
const router = Router();

const Spot = require("../models/spots");

router.get("/", async (req, res, next) => {
  try {
    const spots = await Spot.find();
    if (!spots) return res.status(400).send("No hay spots en el mapa");
    res.json(spots);
  } catch (error) {
    res.status(500).send("Hay un problema interno con el servidor");
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newSpot = new Spot(req.body);
    const createdSpot = await newSpot.save();
    res.json(createdSpot);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
