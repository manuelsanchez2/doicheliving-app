const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config({ path: ".env" });

const initDatabase = require("./config/database");

const usersRoute = require("./lib/routes/users");
const authRoute = require("./lib/routes/auth");
const spotsRoute = require("./lib/routes/spots");
// const articlesRoute = require("./lib/routes/articles");

const port = process.env.PORT || 3001;
const app = express();
app.use(morgan("common"));
app.use(express.json({ extended: true }));

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/spots", spotsRoute);
// app.use("/api/articles", articlesRoute);

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);
// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

initDatabase().then(async () => {
  app.listen(port, () => {
    console.log(`Server is really running on http://localhost:${port}`);
  });
});

// initDatabase();

// app.listen(port, () => {
//   console.log(`Server is really running on http://localhost:${port}`);
// });
