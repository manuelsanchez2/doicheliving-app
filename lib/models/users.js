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

async function createUser(userName, email, password, passwordRepeat) {
  const usersCollection = await getCollection("users");
  const user = await usersCollection.insertOne({
    userName,
    email,
    password,
    passwordRepeat,
  });
  if (!user) {
    return null;
  }
  return user;
}

exports.createUser = createUser;
exports.readUsers = readUsers;
