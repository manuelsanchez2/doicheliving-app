const { Router } = require("express");
const router = Router();

const { readUsers, createUser } = require("../models/users");

router.get("/", async (request, response) => {
  try {
    const userName = request.query.userName;
    const users = await readUsers(userName);
    response.status(200).json(users);
  } catch (error) {
    console.log(error);
    response.status(404).send("Users not found, unfortunately");
  }
});

router.post("/", async (request, response) => {
  const { userName, password, email, passwordRepeat } = request.body;
  try {
    console.log("POST in /api/users");
    const user = await createUser(userName, email, password, passwordRepeat);
    response.status(201).send(user);
  } catch (error) {
    console.error("There was a problem with the process", error);
    response.status(500).send(error.message);
  }
});
module.exports = router;
