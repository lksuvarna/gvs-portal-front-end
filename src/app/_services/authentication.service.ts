import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieHandlerService } from './cookie-handler.service';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private cookie: CookieHandlerService) { }

  /**
  *
  **/
  loadUserCredentials() {
    return new Promise((resolve) => {
      this.http.get('/account').subscribe((data) => {
        if (!data.json().error) {
          let token = data.json().user;
          this.cookie.setCookie(
            'app-session',
            JSON.stringify(
              {
                blueGroups: token.blueGroups,
                emailAddress: token.emailAddress,
                firstName: token.firstName,
                lastName: token.lastName,
                uid: token.uid,
                cn: token.cn,
                roles: token.roles
              }), 1);
        } else {
          console.log('Login failed.');
        }
      })
    });
  }
}
