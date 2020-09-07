const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Doiche Living App listening at http://localhost:${port}`);
});
