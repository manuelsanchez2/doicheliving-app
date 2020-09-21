const express = require("express");
const app = express();
const morgan = require("morgan");
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const path = require("path");

const port = process.env.PORT || 3001;

app.use(morgan("common"));

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use("/api", router);
app.use(middlewares);
// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Doiche Living App listening at http://localhost:${port}`);
});
