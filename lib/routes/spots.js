const { Router } = require("express");
const router = Router();

const { readSpots } = require("../models/spots");

router.get("/", async (request, response) => {
  try {
    const spots = await readSpots();
    if (!spots) {
      response.status(404).send(`Spots not found`);
    }
    response.status(200).json(spots);
  } catch (error) {
    console.log(error);
    response.status(500).send(error.message);
  }
});

module.exports = router;
