import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
declare var require: any;
var roles = require('../../../VCAP_USER.json');

@Injectable({
  providedIn: 'root'
})
export class BluegroupsService {

  /**
   * Constructor
   * 
   * @param {Http} _http 
   * @param {HttpClient} _httpClient 
   */
  constructor(private _http: Http, private _httpClient: HttpClient) { }

  /**
   * 
   * @param bluegroup 
   */
  getBlueGroupMembersByName(bluegroup) {
    var postReq = JSON.stringify({ bluegroup: bluegroup });
    var params = postReq;
    console.log('Current URL: /bluegroups/getMemberByName/' + params);
    return this._http.get('/bluegroups/getMemberByName/' + params)
      .map((response: Response) => {
        let token = response.json();
        //console.log(token);
        return token;
      });
  }

  /**
   * 
   * @param {string} role 
   */
  getAbsoluteBlueGroup(role) {
    return this._http.get('/bluegroup')
      .map((response: Response) => {
        let token = response.json();
        return token[role];
      });
  }
}
