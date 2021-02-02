import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { sendPost } from './node';



@Injectable({providedIn: 'root'})



export class ConnectCucdmService {
  private Url = '/api/rest/post';

  constructor(private http: HttpClient) { }
  getNodes (cnum: string): Observable<any> {
    return this.http.post(this.Url,{ cnum })
    .pipe(catchError(this.errorhandler))


  }

  errorhandler (error :HttpErrorResponse){
  console.log(error.message)
  return Observable.throw (error.message || "Sever Error");
  }
}
