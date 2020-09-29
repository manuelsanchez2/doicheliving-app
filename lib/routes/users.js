const { Router } = require("express");
const router = Router();

const { readUsers } = require("../models/users");

router.get("/", async (request, response) => {
  try {
    const users = await readUsers();
    if (!users) {
      response.status(404).send(`Users not found`);
    }
    response.status(200).json(users);
  } catch (error) {
    console.log(error);
    response.status(500).send(error.message);
  }
});

module.exports = router;
