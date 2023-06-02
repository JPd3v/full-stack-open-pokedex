/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-console */
const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  res.send("ok");
  // new comments in other branch
  // ci/cd pull request trigger
});

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
