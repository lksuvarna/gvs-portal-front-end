
  const express = require('express');
  const path = require('path');
  const compression = require('compression');
  const bodyParser = require('body-parser');
  const getApi = require('./routes/get');
  const postApi = require('./routes/post');
  const index = require('./routes/index');
  const app = express();
  app.use(compression());
 // app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // app.use('/api/rest/get', getApi);
  // app.use('/api/rest/post', postApi);

console.log('starting app in dev mode '+ path.normalize(__dirname+'/../../'));
    //catch all route
   app.use(express.static(path.join(__dirname, 'dist/gvs-portal-front-end')));

    //catch all route
    app.use('*', index);
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
  });



  module.exports = app;
