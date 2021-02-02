const express = require('express');
const router = express.Router();
//const queryString = require('query-string');
//const config = require('config');
const apiConnector = require('./api-connector');
router.get('/', function(req, res, next) {
  apiConnector.sendApiRequest('GET', req, res, next);
});
module.exports = router;