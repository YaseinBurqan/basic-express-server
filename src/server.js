"use strict";
const express = require("express");
const stamper = require("../middleware/stamper");
const notFoundHandler = require("../handlers/404");
const errorHandler = require("../handlers/500");
const validator = require("../middleware/validator");

const logger = require("../middleware/logger");
const getAgent = require("../middleware/getAgent");
const square = require("../middleware/square");
const person = require("../handlers/person");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).send("Welcome To The Main  website");
});

app.get("/data", (req, res) => {
  res.json({
    id: 1,
    name: "Yasein Burqan",
    email: "mr.yasein@gmail.com",
  });
});

app.get("/bad", (req, res) => {
  let num = 10;
  let result = num.forEach((x) => {
    console.log(x);
  });
  res.status(500).send(result);
});

app.get("/person", validator, person);

app.use("*", notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
module.exports = {
  app: app,
  start: start,
};
