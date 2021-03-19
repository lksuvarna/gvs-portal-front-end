import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private Url = '/api/feedback';
  constructor(private http : HttpClient) { }

  savefeedbackResponse(ccode:string): Observable<any> {
    console.log("getcountrydetails"+ccode);
    return this.http.post(this.Url, {ccode})
    .pipe(catchError(this.errorhandler))
  }
  errorhandler(error: HttpErrorResponse) {
    console.log(error.message)
    return Observable.throw(error.message || "Sever Error");
  }
  
}