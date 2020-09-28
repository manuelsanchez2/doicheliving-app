const { Router } = require("express");
const router = Router();

const { readUsers } = require("../models/users");

router.get("/", async (request, response) => {
  try {
    const users = await readUsers();
    if (!users) {
      response.status(400).send(`Users not found`);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send(`Problem`);
  }
});

module.exports = router;
