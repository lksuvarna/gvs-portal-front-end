import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {feedbackModel} from '../components/feedback/feedbackModel'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private Url = '/api/feedback';
  constructor(private http : HttpClient) { }

  savefeedbackResponse(feedbackdetails:feedbackModel): Observable<any> {
    console.log("getcountrydetails"+feedbackdetails);
    return this.http.post(this.Url, feedbackdetails)
    .pipe(catchError(this.errorhandler))
  }
  errorhandler(error: HttpErrorResponse) {
    console.log(error.message)
    return Observable.throw(error.message || "Sever Error");
  }
  
}
