import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Jabber_New, Jabber_Update, snowsearch } from '../../../config/payload';


@Injectable({ providedIn: 'root' })

export class servicenowservice {

  private submitUrl = '/api/submit_snow';
  private searchUrl ='/api/search_snow';
  payload: snowsearch = new snowsearch();
  constructor(private http: HttpClient) { }
  submit_request(Jabber_new_payload : Jabber_New): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Jabber_new_payload)
      .pipe(catchError(this.errorhandler))
  }
  
  submit_request_update(Jabber_update_payload : Jabber_Update): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Jabber_update_payload)
      .pipe(catchError(this.errorhandler))
  }

  searchsnow(cnum: string, type: string,reqno : string): Observable<any> {
    console.log('calling snow swarch');
    this.payload.cnum=cnum;
    this.payload.request_type=type;
    this.payload.reqno=reqno;
    return this.http.post(this.searchUrl,this.payload)
      .pipe(catchError(this.errorhandler));
  }
  searchsnowcoments(cnum: string, type: string,reqno : string,number:string): Observable<any> {
    console.log('calling snow swarch');
    this.payload.cnum=cnum;
    this.payload.request_type=type;
    this.payload.reqno=reqno;
    this.payload.number=number;
    return this.http.post(this.searchUrl,this.payload)
      .pipe(catchError(this.errorhandler))
  }
  

  errorhandler(error: HttpErrorResponse) {
    console.log(error.message)
    return Observable.throw(error.message || "Sever Error");
  }
}
