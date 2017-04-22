const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.get("/api/user/:username", cors(), (req, res) => {
  const { username } = req.params;

  fetch(`https://instagram.com/${username}/media`)
    .then(data => data.json())
    .then(json => res.json(json));
});

app.listen(9666, () => {
  console.log("Listening on port 9666"); // eslint-disable-line
});
