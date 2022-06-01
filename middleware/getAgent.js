'use strict';
function getAgent(req, res, next) {
  req.myName = 'Yasein';
  req.browser = req.headers['user-agent'];
  next();
}
module.exports = getAgent;
