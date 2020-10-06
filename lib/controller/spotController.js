const Spot = require("../models/spots");

exports.seeSpots = async (req, res, next) => {
  try {
    const spots = await Spot.find();
    if (!spots) return res.status(400).send("No hay spots en el mapa");
    res.json(spots);
  } catch (error) {
    res.status(500).send("Hay un problema interno con el servidor");
    next(error);
  }
};

exports.createSpot = async (req, res) => {
  try {
    // Create new spots
    const spot = new Spot(req.body);

    // Save the creator
    spot.creator = req.user.id;

    // Save the spot
    const createdSpot = await spot.save();
    res.json(createdSpot);
  } catch (error) {
    console.log(error);
    res.status(500).send("Vaya, ha habido un error");
  }
};
