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
  // new comment to test if statement deploy in github actions
});

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
