var express 		= require('express'),
passport 		= require('passport'),
router 			= express.Router();
var cookieParser = require('cookie-parser');
var fs = require('fs');
var https = require('https');

// read settings.js
var settings = require('./settings.js');
var os = require("os");
var hostname = os.hostname();
var openid_certification = '';
var callback_host = '';
var client_id = '';
var client_secret = '';
var authorization_url = '';
var token_url = '';
var issuer_id = '';

// DEV
if ( hostname === 'mxgdlwl01' ){
  console.log("[Auth] Development");
  callback_host = settings.callback_url_dev;
  client_id = settings.client_id;
  client_secret = settings.client_secret;
  authorization_url = settings.authorization_url;
  token_url = settings.token_url;
  issuer_id = settings.issuer_id;
  openid_certification = '/oidc_w3id_staging.cer';
}
//UAT
else if(hostname === 'mxgdlwl02'){
  console.log("[Auth] Uat");
  callback_host = settings.callback_url_uat;
  client_id = settings.client_id;
  client_secret = settings.client_secret;
  authorization_url = settings.authorization_url;
  token_url = settings.token_url;
  issuer_id = settings.issuer_id;
  openid_certification = '/oidc_w3id_staging.cer';
}
//PROD
else if(hostname === 'mxgdlwl03'){
  console.log("[Auth] Production");
  callback_host = settings.callback_url_prod;
  client_id = settings.client_id_prod;
  client_secret = settings.client_secret_prod;
  authorization_url = settings.authorization_url_prod;
  token_url = settings.token_url_prod;
  issuer_id = settings.issuer_id_prod;
  openid_certification = '/oidc_w3id_prod.cer';
}
// local
else{
  console.log("[Auth] Local");
  callback_host = settings.callback_url_local;
  client_id = settings.client_id;
  client_secret = settings.client_secret;
  authorization_url = settings.authorization_url;
  token_url = settings.token_url;
  issuer_id = settings.issuer_id;
  openid_certification = '/oidc_w3id_staging.cer';
}


// work around intermediate CA issue
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// =========================================================================
// passport session setup
// =========================================================================
// required for persistent login sessions
// passport needs ability to serialize and unserialize users out of session

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


var OpenIDConnectStrategy = require('passport-ci-oidc').IDaaSOIDCStrategy;






var Strategy = new OpenIDConnectStrategy({
  discoveryURL : authorization_url,  
  tokenURL : token_url,
  clientID : client_id,
  scope: 'openid',
  response_type: 'code',
  clientSecret : client_secret,
  callbackURL : callback_host,
  skipUserProfile: true,
  issuer: issuer_id,
  addCACert: true,
  CACertPathList: ["/oidc_w3id_staging.cer","/DigiCertGlobalRootCA.crt","/DigiCertSHA2SecureServerCA.crt"]
},
  function(iss, sub, profile, accessToken, refreshToken, params, done)  {
    try{
        process.nextTick(function() {
        profile.accessToken = accessToken;
        profile.refreshToken = refreshToken;
        done(null, profile);
      });
    }catch(e){
      done (e);
    }
  });

  // =========================================================================
  // LDAP
  // =========================================================================
  passport.use(Strategy);

  module.exports = passport = router;
