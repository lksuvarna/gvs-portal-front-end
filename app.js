
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
  var w3config = require('./config/w3config');
  var passport = require('passport');
 // app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  const OpenIDConnectStrategy = require('passport-ci-oidc').IDaaSOIDCStrategy;
const OIDCStrategy = new OpenIDConnectStrategy({
  discoveryURL: process.env['discovery_url'],
  clientID: process.env['clientID'],
  scope: process.env['scope'],
  response_type: process.env['response_type'],
  clientSecret: process.env['clientSecret'],
  callbackURL: process.env['callbackURL'],
  skipUserProfile: w3config.skipUserProfile,
  addCACert: true,
  skipUserProfile: true,
  issuer: process.env['Issuer'],
  CACertPathList: w3config.CACertPathList,
}, function(iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done) {
  process.nextTick(function() {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;
    done(null, profile);
  })
});

passport.use(OIDCStrategy);

app.get('/auth/sso/callback',function(req, res, next) {
var redirect_url = req.session.originalUrl;
var mode = req.session.mode;
console.log('Mode is', mode);
console.log('redirect url', redirect_url);
if (mode === 'local') {
  passport.authenticate('openidconnect', { successRedirect: redirect_url })(req,res,next);
} else {
  passport.authenticate('openidconnect', { successRedirect: redirect_url })(req,res,next); /* failureRedirect: '/failure' */
}
});

function ensureAuthenticated(req, res, next) {
console.log('Checking auth status.....');
if (!req.isAuthenticated()) {
  console.log('NOT AUTHENTICATED');
  req.session.originalUrl = req.originalUrl;
  console.log(req.session.originalUrl);
  if (req.query && 'local' === req.query.mode) {
    console.log('INSIDE LOCAL MODE BLOCK');
    req.session.mode = 'local';
    req.session.originalUrl = 'https://localhost:4200'
  }
  res.redirect('/api/login');
} else {
  console.log('USER =>', req.user.id);
  // already authenticated, and running in mode == local, force the authentication
  if (req.query.mode === 'local') {
    req.session.mode = 'local';
    req.session.originalUrl = 'https://localhost:4200'
    res.redirect('/api/login');
  }
  return next();
}
}

/*
Routers - order is important.
*/

// Login router must be the 1st
app.get('/api/login', passport.authenticate('openidconnect', {}));

// this router must be the 2nd
app.use('/', ensureAuthenticated);

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
