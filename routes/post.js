const express = require('express');
const router = express.Router();
const apiConnector = require('./api-connector');
router.post('/', function(req, res, next) {
  apiConnector.sendApiRequest('POST', req, res, next);
});

module.exports = router;
