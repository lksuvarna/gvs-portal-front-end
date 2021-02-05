var express = require('express'),
  passport = require('passport'),
  router = express.Router() ,
  middleware = require('../lib/middleware.js')(passport);






//--------------- Config file & path --------------------------

//***************************************************
// auth && login

router.get('/', function (req, res) {
  console.log("Getting session data");
  console.log('Entra a account!');
  if (req.session.isAuthenticated) {
    res.send({
      user: req.session.user
    });
  } else {
    res.redirect('/auth/sso/callback');
  }
});


// This function Validates if the user is already logen on your application
// In case the user does not, will be requested to login
function ensureAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    console.log('callback');
    res.redirect('/auth/sso/callback');
  } else {
    req.session.originalUrl = '/'
    return next();
  }
}
router.get('/auth/sso/callback', middleware.urlEncodedParser, middleware.passport.authenticate('openidconnect'), function (req, res) {
  console.log('Entra a callback');
  req.session.user = req.user['_json'];
  req.session.isAuthenticated = true;
  //req.session.user.roles = [];
  /************Bluegroups**********/

  //var groups = req.session.user.blueGroups;


  //var roles = req.session.user.roles;
  //var redirect_url;

  var redirect_url = req.session.originalUrl;
  res.redirect(redirect_url);

 // res.redirect("https://localhost:6005/");
});

// Failure page
router.get('/failure', function (req, res) {
  res.send('login failed');
  res.redirect('/unauthorized');
});
// Handle callback, if authentication succeeds redirect to
// original requested url, otherwise go to /failure
// This is the Redirect URIs on the W3ID Registration



module.exports = exports = router;
