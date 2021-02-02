const https = require('https');
const http = require('http');
const config = require('config');
//const _apis = config.get('APIs');
// const cookieMaster = require(cookie-master);
const fs = require('fs');
const path = require('path');
const rootpath =  path.normalize(__dirname+'/../../');
const certFile = path.resolve(__dirname, 'certi/americacucdm.cer'); ;
const _ = require('lodash');
const queryString = require('query-string');

let apiConnector = {
    doPost: function(req, postBody, resultMapper) {

      process.on('unhandledRejection', error => {
        // Won't execute
        console.log('unhandledRejection', error);
      });

      this.selectedhost="localhost";
      this.selectedpath="/api/rest/submit_snow_request";
      this.selectedbody=postBody;

      return new Promise((resolve, reject)=>{
        console.log("selected host = "+this.selectedhost);
        let options = {
          method: 'POST',
          host: this.selectedhost,
          path: this.selectedpath,
          port:'6800',
         // cert: fs.readFileSync(certFile),
          headers: {
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify(this.selectedbody).length,
            //'Authorization': "Basic " + new Buffer(this.selectedID+ ":" + this.selectedpassword).toString("base64")
          }
         };
        let callBack = function (response) {
          let result = '';
          response.on('data', function(chunk) {
            result += chunk;
          });
          response.on('error', function(error) {
            reject(error);
          });
          response.on('end', function() {
            if (typeof result === 'string') {
              try {
                result = JSON.parse(result);
              } catch(error) {
                  console.log(error);
              }
            }
            resolve({
              result: (resultMapper == null)?result:resultMapper(result),
              headers: response.headers
            });
          });
        };
      console.log(this.selectedhost)
      console.log(this.selectedpath)
      //console.log(this.selectedID)
      //console.log(this.selectedpassword)
      console.log(this.selectedbody)

        let request = http.request(options, callBack);
              request.on('error', function (error) {
                  reject(error);
        });
              if (this.selectedbody != null)
              {
                  request.write(JSON.stringify(this.selectedbody));
        }
        request.end();
      });
  },

  doGet: function(req, query, resultMapper) {
    console.log('Request Header ===> '+req.headers);
    process.on('unhandledRejection', error => {
     // Won't execute
     console.log('unhandledRejection', error);
   });
     return new Promise((resolve, reject) =>{
       let options = {
         method: 'GET',
         host: _apis.get.host,
         path: _apis.get.path +"?"+ query,
         cert: fs.readFileSync(certFile),
         headers: {
           'Connection': 'keep-alive',
           'Content-Type': 'application/json',
           'Authorization': "Basic " + new Buffer("swarchou@in.ibm.com" + ":" + "").toString("base64")
         }
       };
       console.log('Query is ==>'+ query);
       // console.log('Query String is ==>'+ JSON.stringify(query));
       let callBack = function (response) {
         let result = '';
         response.on('data', function(chunk) {
           result += chunk;
         });
         response.on('error', function(error) {
           reject(error);
         });
         response.on('end', function() {
           if (typeof result === 'string') {
             try {
               result = JSON.parse(result);
             } catch(error) {
                 console.log(error);
             }
           }
           resolve({
             result: (resultMapper == null)?result:resultMapper(result),
             headers: response.headers
           });
         });
       };
       let request = https.request(options, callBack);
       request.on('error', function (error) {
           reject(error);
       });
       request.end();
     });
 },

  sendApiRequest: function(verbe, req, res, next, extra, mapper) {
    switch(verbe) {
      case 'GET':
        const query = queryString.stringify(req.query);
        this.doGet(req, query, mapper)
          .then(success => this.sendApiResponse(req, res, success.result, success.headers))
          .catch(err => { console.log(err); res.status(515).send(err);});
        break;
      case 'POST':
        const postBody =   req.body;
        //const postBody =  _apis.postAmerica.body;
        console.log('Post body =>' + JSON.stringify(req.body));
        // res.status(200).json({
        //     message: 'post request!',
        //     id : postBody.name

        // });
         this.doPost(req, postBody, mapper)
           .then(success => this.sendApiResponse(req, res, success.result, success.headers))
           .catch(err => { console.log(err); res.status(515).send(err);});

    }
  },
  sendApiResponse: function(req, res, data, headers) {
    try {

      _.forEach(headers, (header, key) => {
        res.setHeader(key, header);
      });
      res.write(!_.isString(data)?JSON.stringify(data):data);
      res.end();
    } catch (error) {
      req.log.error(error);
    }
  }
}

module.exports = apiConnector;
