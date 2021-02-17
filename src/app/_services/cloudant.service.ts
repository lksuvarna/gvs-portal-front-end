import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError  } from 'rxjs/operators';




@Injectable({providedIn: 'root'})



export class cloudantservice {
  private Url = '/api/coutrydetails';
aa="ssssss"
  constructor(private http: HttpClient) { }
  getcountrydetails(): Observable<any> {
   // return this.http.get('/feedback');    
      return this.http.post(this.Url,undefined)
      .pipe(catchError(this.errorhandler))     }  
    
     
       errorhandler (error :HttpErrorResponse){
       console.log(error.message)
       return Observable.throw (error.message || "Sever Error");
       }
  }
  
