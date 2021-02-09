#!/usr/bin/env node


/**
 * Module dependencies.
 */
var app = require('../app');
var debug = require('debug')('consumer:server');
var http = require('http');
const https = require('https');
const fs = require('fs');
require('dotenv').config();
//const fs =require('fs');
//const path = require('path');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '4200');
app.set('port', port);

/**
 * Create HTTP server.
 */

 if(process.env.host=="local"){
  var server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app);
 }else{
  var server = http.createServer(app);
 }
//
//create server


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port,() => {
  console.log('Server started!');
});

server.on('error', onError);
server.on('listening', onListening);
server.keepAliveTimeout = 600000;
server.timeout = 600000;
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
