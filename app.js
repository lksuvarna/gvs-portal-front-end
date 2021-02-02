
  const express = require('express');
  const path = require('path');
  const compression = require('compression');
  const bodyParser = require('body-parser');
  const getApi = require('./routes/get');
  const postApi = require('./routes/post');
  const index = require('./routes/index');
  const cfenv = require('cfenv');
  const app = express();
  app.use(compression());
 // app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

   app.use('/api/rest/get', getApi);
   app.use('/api/rest/post', postApi);


console.log('starting app in dev mode '+ path.normalize(__dirname+'/../../'));
    //catch all route
   app.use(express.static(path.join(__dirname, 'dist/gvs-portal-front-end')));

    //catch all route
    app.use('*', index);


    var appEnv = cfenv.getAppEnv();
    var port = '4200';
    app.set('port', port);
    app.listen(port,() => {
      console.log("server started" + appEnv.url);
    });




  module.exports = app;
