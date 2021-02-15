import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError  } from 'rxjs/operators';




@Injectable({providedIn: 'root'})



export class bpservices {
  private Url = '/api/rest/post';
aa="ssssss"
  constructor(private http: HttpClient) { }
  bpname(): Observable<any> {
   // return this.http.get('/feedback');    
      return this.http.post(this.Url,undefined)
      .pipe(catchError(this.errorhandler))     }  
    
     
       errorhandler (error :HttpErrorResponse){
       console.log(error.message)
       return Observable.throw (error.message || "Sever Error");
       }
  }
  
