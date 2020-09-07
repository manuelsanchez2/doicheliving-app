const express = require("express");
const app = express();
const morgan = require("morgan");

const path = require("path");

const port = process.env.PORT || 3001;

app.use(morgan("common"));

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.listen(port, () => {
  console.log(`Doiche Living App listening at http://localhost:${port}`);
});
