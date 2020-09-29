const { getCollection } = require("../database");

async function readSpots() {
  const spotCollection = await getCollection("spots");
  const spots = await spotCollection.find({}).toArray();

  if (!spots) {
    return null;
  }
  return spots;
}
exports.readSpots = readSpots;
