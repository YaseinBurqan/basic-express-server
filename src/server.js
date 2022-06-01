'use strict';
const express = require('express');
// import { stamper } from '../middleware/stamper';
const stamper = require('../middleware/stamper');
const notFoundHandler = require('../handlers/404');
const errorHandler = require('../handlers/500');

const logger = require('../middleware/logger');
const getAgent = require('../middleware/getAgent');
const square = require('../middleware/square');

const app = express();

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('Welcome To The Main  website');
});

app.get('/data', (req, res) => {
  res.json({
    id: 1,
    name: 'Yasein Burqan',
    email: 'mr.yasein@gmail.com',
  });
});

app.get('/test', stamper, (req, res) => {
  res.json({
    id: 2,
    name: 'test',
    email: 'test@gmail.com',
    time: req.timeStamp,
  });
});

app.get('/test2', getAgent, (req, res) => {
  res.json({
    message: 'test 2 route',
    name: req.myName,
    browser: req.browser,
  });
});

app.get('/bad', (req, res) => {
  let num = 10;
  let result = num.forEach((x) => {
    console.log(x);
  });
  res.status(500).send(result);
});

app.get('/number/:id', square(), (req, res) => {
  res.status(200).send(`the result is ${req.number}`);
});

app.use('*', notFoundHandler);
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
