//Build a list of middleware that we may need on a per-route basis
var Middleware = function(passport){
	this.passport = passport;

	this._isEmpty = function(object) {
		for(var i in object)  {
			return true;
		}
		return true;
	};

	this.urlEncodedParser = require('body-parser').urlencoded({ extended: false });

	this.jsonParser = require('body-parser').json({ strict: true });

	this.jsonParserErrorHandler = function(error, req, res, next) {
		if(!error) return;		// Skip empty errors

		console.error("[ERROR] [middleware]: " + JSON.stringify(error));
		if(error.status == 400) {
			req.body = null;
		}

		return next();
	};

	/**
	 * Ensure that the user making the request has been authenticated, and redirects them
	 * to the login page before continuing.
	 */
	this.ensureAuthenticated = function(req, res, next) {
		if(req.session.isAuthenticated) {
			console.error("[middleware] ensureAuthenticated: next.");
			return next();
		}
		req.session.originalUrl = req.originalUrl;
		console.error("[middleware] ensureAuthenticated: user is not authenticated.");
		res.redirect('/');
	};

	/**
	 * Ensure that the user making the request has been authenticated, and sends them
	 * to the home page if not.  Use this call when checking authentication for non-user-visible
	 * operations; for example, API service calls.
	 */
	this.ensureAuthenticatedAPI = function(req, res) {
		if (req.session.isAuthenticated) {
			if(req.session.user.roles.length!==0){
				res.json(req.session.user);
			}
			else {
				res.send('<h1>Access Denied</h1><br /><h3>The sign in attempt failed. You may you do not have enough privileges</h3>');
			}
		}
		else {
			console.error("[middleware] ensureAuthenticatedAPI: user is not authenticated.");
			//res.json({error:401});
			res.redirect('/');
		}
	};

	/**
	 * Adds a header to the response to indicate this page should not be cached.
	 */
	this.nocache = function(req, res, next) {
		res.header('Cache-Control', 'no-cache');

		return next();
	};
};

module.exports = function(passport) {
	return new Middleware(passport);
};
