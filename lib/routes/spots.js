const { Router } = require("express");
const router = Router();
const spotController = require("../controller/spotController");
const auth = require("../middlewares/auth");

// api/spots

router.get("/", spotController.seeSpots);

router.post("/", auth, spotController.createSpot);

module.exports = router;
