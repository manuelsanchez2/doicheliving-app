const { Router } = require("express");
const router = Router();
const spotController = require("../controller/spotController");

// api/spots

router.get("/", spotController.seeSpots);

router.post("/", spotController.createSpot);

module.exports = router;
