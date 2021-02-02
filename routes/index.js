var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  console.log('rootpath = ' + path.normalize(__dirname+'/../../'));
  res.sendFile(path.join(__dirname, '../', 'dist/gvs-portal-front-end/index.html'));
})

module.exports = router;
