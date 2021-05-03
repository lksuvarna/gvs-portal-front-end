import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { createOfflineCompileUrlResolver } from '@angular/compiler';



import { Jabber_New,Jabber_Delete,Jabber_Update,Jabber_Move, snowsearch, fixedphone_new, fixedphone_delete, fixedphone_update, Fac_New, Fac_Update, Fac_Reset,Fac_Deactivate  } from '../../../config/payload';



@Injectable({ providedIn: 'root' })

export class servicenowservice {

  private submitUrl = '/api/submit_snow';
  private searchUrl ='/api/search_snow';
  private approveUrl='/api/approve_snow';
  payload: snowsearch = new snowsearch();
  constructor(private http: HttpClient) { }
  submit_request(Jabber_new_payload : Jabber_New): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Jabber_new_payload)
    .pipe(catchError(this.errorhandler));
      // .pipe(catchError((error) => {
      //   console.log('error is intercept')
      //   console.error(error);
      //   return throwError(error);
      // }))
  }
  submit_request_delete(Jabber_delete_payload : Jabber_Delete): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Jabber_delete_payload)
      .pipe(catchError(this.errorhandler))
  }
  
  submit_request_update(Jabber_update_payload : Jabber_Update): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Jabber_update_payload)
      .pipe(catchError(this.errorhandler))
  }
  submit_request_move(Jabber_move_payload : Jabber_Move): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Jabber_move_payload)
      .pipe(catchError(this.errorhandler))
  }

  submit_request_fixed_new(fixedphone_new_payload : fixedphone_new): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,fixedphone_new_payload)
      .pipe(catchError(this.errorhandler))
  }

  submit_request_fixed_delete(fixedphone_delete_payload : fixedphone_delete): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,fixedphone_delete_payload)
      .pipe(catchError(this.errorhandler))
  }


  submit_request_fixed_update(fixedphone_update_payload : fixedphone_update): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,fixedphone_update_payload)
      .pipe(catchError(this.errorhandler))
  }

  submit_request_fac_new (fac_new_payload : Fac_New): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,fac_new_payload)
    .pipe(catchError(this.errorhandler));
  }
  submit_request_fac_deactivate (fac_deactivate_payload : Fac_Deactivate): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,fac_deactivate_payload)
    .pipe(catchError(this.errorhandler));
  }
  
  submit_request_fac_update(Fac_update_payload : Fac_Update): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Fac_update_payload)
      .pipe(catchError(this.errorhandler))
  }

  submit_request_fac_reset(Fac_reset_payload : Fac_Reset): Observable<any> {
    console.log('calling snow');
    return this.http.post(this.submitUrl,Fac_reset_payload)
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
    .pipe(catchError(this.errorhandler));
      // .pipe((error) => {
      //   console.log('error is intercept')
      //   console.error(error);
      //   return throwError(error);
      // })
  }
  
 approvesnow(sysid : string, status: string, comments: string): Observable<any> {
    console.log('calling snow swarch');
    this.payload.request_type='snow_approve_requests';
    this.payload.sysid=sysid;
    this.payload.status=status;
    this.payload.comments=comments;
    return this.http.post(this.approveUrl,this.payload)
      .pipe(catchError(this.errorhandler));
  }

  errorhandler(error: HttpErrorResponse) {
    console.log('error is intercept');
    console.log(error.message);
    //return Observable.throw(error.message || "Sever Error");
    return throwError(error);
  }
}
