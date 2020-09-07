const express = require("express");
const app = express();
const morgan = require("morgan");
// const jsonServer = require("json-server");
const path = require("path");
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

app.use(morgan("common"));

app.use(express.static(path.join(__dirname, "client/build")));
// app.use(middlewares);
// app.use(router);

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.listen(port, () => {
  console.log(`Doiche Living App listening at http://localhost:${port}`);
});
