const express = require('express');
const cookieParse = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const app = express();
const passport = require('passport');
const session = require('express-session');
const fs = require('fs');
const nroute = require('./server/config/routes');

//This is required ALWAYS on the top
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create server
var server = https.createServer({
     key: fs.readFileSync('key.pem'),
     cert: fs.readFileSync('cert.pem')
 }, app);

 // init passport
 console.info("[app] init passport ");
 app.use(passport.initialize());
 app.use(passport.session());

 // init session
 console.info("[app] init session ");
 app.use(session({
    keys: ['SPOE_Support'],
    secret: 'a2z in cloud',
     name: "SPOE_Support",
     resave: false,
     saveUninitialized: false
 }));
 
 var port = "62022";

 var date = new Date();
 var hours = date.getHours();
 var minutes = date.getMinutes();
 var auxMinutes = "";
 var auxHours = "";
 if(minutes < 10){
     auxMinutes = "0" + minutes; 
 }else{
     auxMinutes = minutes + "";
 }

 if(hours < 10){
    auxHours = "0" + hours; 
}else{
    auxHours = hours + "";
}

 var current_hour = auxHours + ':' + auxMinutes;


/*Uncomment this to bluemix on localhost*/
// /*********************************************************************************/
//  app.set('port', process.env.PORT || 4000);
//
// server = app.listen(app.get('port'), function() {
//   console.log('[app] Express server listening on port ' + server.address().port);
// 	console.log("[app] Running Starter kit is running at " + port + ', started at: ' + current_hour + ' hrs');
// });
/*********************************************************************************/

 server.listen( 6005, () => console.log('Running Starter kit on PORT: ' + '6005' + ', started at: ' + current_hour + ' hrs' ) );

//file for interacting with auth
app.use(require('./server/config/passport'));
//app.use(require('./server/config/staticfile'));

//routes
app.use('',nroute);

//angular dis output folder
//production ng build
app.use(express.static(path.join(__dirname,'dist/gvs-portal-front-end')));
//app.use(express.static(path.join(__dirname,'src')));

//send all other request to angular app
app.get('*',(req, res) =>{
  res.sendFile(path.join(__dirname,'./dist/gvs-portal-front-end/index.html'))
  //res.sendFile(path.join(__dirname,'./src/index.html'))
});

app.use(function(req,res,next){
 res.header('Access-Control-Allow-Origin', "*");
 res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 res.header('Access-Control-Allow-Credentials', 'true');
 res.header('Content-Type', 'application/json');
 next();
});
