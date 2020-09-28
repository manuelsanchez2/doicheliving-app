const { getCollection } = require("../database");

async function readUser() {
  const userCollection = await getCollection("users");
  const users = await userCollection.find({}).toArray();

  if (!users) {
    return null;
  }
  return users;
}
exports.readUser = readUser;
