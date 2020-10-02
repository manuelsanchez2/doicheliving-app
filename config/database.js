const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const initDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB conectada");
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    process.exit(1);
  }
};

module.exports = initDatabase;
