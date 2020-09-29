const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const { initDatabase } = require("./lib/database");

const users = require("./lib/routes/users");
const spots = require("./lib/routes/spots");
const articles = require("./lib/routes/articles");

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use(morgan("common"));

app.use("/api/users", users);
app.use("/api/spots", spots);
app.use("/api/articles", articles);

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);
// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

initDatabase(process.env.MONGO_URL, process.env.MONGO_DB_NAME).then(
  async () => {
    console.log(`Database ${process.env.MONGO_DB_NAME} is working`);
    app.listen(port, () => {
      console.log(`Server is really running on http://localhost:${port}`);
    });
  }
);
