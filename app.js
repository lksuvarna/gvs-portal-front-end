
  const express = require('express');
  const path = require('path');
  const compression = require('compression');
  const bodyParser = require('body-parser');
  const app = express();
  const {createProxyMiddleware}  = require('http-proxy-middleware');
  app.use(compression());
  var passport = require('passport');
  const cookieParser = require('cookie-parser');
  const session = require('cookie-session');
  const w3config= require('./config/w3config');
  require('dotenv').config();
 // app.use(logger('dev'));

 app.use(session({name: 'GVS_Portal', keys: ['GVS_Portal']}));
app.use(passport.initialize());
app.use(passport.session());



//app.use(logger('dev'));
app.use(cookieParser());
app.use(session({resave: 'true', saveUninitialized: 'true' , secret: 'a2z in cloud'}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
// TODO: Write the user context to cloudant to achieve elastic scaling
console.log(user['_json'].blueGroups);
user['_json'].blueGroups = [];
console.log('Serializing...');
done(null, user);
});

passport.deserializeUser(function(obj, done) {
// TODO: Read the user context to cloudant to achieve elastic scaling
console.log('Deserializing...');
done(null, obj);
});


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
  console.log('USER =>', req.user._json.name);
  res.clearCookie('user');  
  res.clearCookie('ccode');          
    res.cookie('user',req.user._json.name);  
    res.cookie('ccode',req.user._json.uid);         
    req.session.authuser=req.user;        
    app.post('/api',function(req,res,next){
      res.status(200).json({
      //  authusername: req.user.displayName
      authusername: req.user
       //username:"Lakkisetty"
      });
  });
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

   const options={
     target:  process.env['target_app'],
     changeOrigin: true,
     secure: false,
     ws:true ,
         }
   app.use('/api/*', createProxyMiddleware(options));
  

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   // http body is not parsed and forwarded to the target as-is
   app.use(bodyParser.text({type: '*/*', limit: '10mb'}));


console.log('starting app in dev mode '+ path.normalize(__dirname+'/../../'));
    //catch all route
   app.use(express.static(path.join(__dirname, 'dist/gvs-portal-front-end')));

    //catch all route
   app.use('*', (req, res) => {
    console.log('rootpath = ' + path.normalize(__dirname+'/../../'));
    res.sendFile(path.join(__dirname, 'dist/gvs-portal-front-end/index.html'));
  });

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
