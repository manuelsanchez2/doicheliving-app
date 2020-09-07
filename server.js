const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("common"));

app.use(express.static(path.join(__dirname, "client/build")));

app.listen(port, () => {
  console.log(`Doiche Living App listening at http://localhost:${port}`);
});
