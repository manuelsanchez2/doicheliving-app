const { getCollection } = require("../database");

async function readUsers() {
  const userCollection = await getCollection("users");
  const users = await userCollection.find({}).toArray();

  if (!users) {
    return null;
  }
  return users;
}
exports.readUsers = readUsers;
