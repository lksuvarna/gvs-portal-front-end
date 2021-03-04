import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { db2search } from '../../../config/payload';

@Injectable({
  providedIn: 'root'
})
export class Db2Service {

  constructor(private http: HttpClient) { }
  private Url = '/api/db2_resource';
  payload : db2search = new db2search();
  search_db2(cnum : string, type:string): Observable<any> {
    this.payload.cnum=cnum;
    this.payload.request_type=type;
    console.log('calling db2');
    return this.http.post(this.Url,this.payload)
      .pipe(catchError(this.errorhandler))
  }
  errorhandler(error: HttpErrorResponse) {
    console.log(error.message)
    return Observable.throw(error.message || "Sever Error");
  }
  
}
