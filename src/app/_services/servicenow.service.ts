import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Injectable({ providedIn: 'root' })

export class servicenowservice {

  private Url = '/api/submit_snow';
  sample : any;
  constructor(private http: HttpClient) { }
  submit_new_jabber_request(): Observable<any> {
    console.log('calling snow');
     this.sample ={
        "orinator_payload" : "000RQU744",
        "cNum_payload" : "000RQU744",
        "Buildings_Disp": "testbuilding",
        "Voice_Type_Disp" : "testvoice",
        "Projectid_Disp" : "12345",
        "icano_Disp" : "testdisp",
        "identifier_hp_Disp" : "to do",
        "BusinessUnit_Disp" : "testBU",
        "Department_number_Disp" : "dept",
        "Location_final" : "Location_final",
        "accid_Disp" : "accid disp",
        "ReqNo" : "NS-06521V-0028",
        "level2_japproval" : "yes",
        "countryname" : "India",
        "request_type" : "jabber_new",
        "evolution_instance":"AP",
    "level1_japproval":"yes",
    "qag":"IBM ENHANCED QAS Group 3 - All Features Legacy E&C v2.0",
    "class_of_serice":"COS_APAC_INDIA",
    "gvs_portal_link":"NA",
    "gvs_approval_link":"NA",
    "SLA_type":"seven_days_reminder",
    "country_code" : "744"
    };
    return this.http.post(this.Url,this.sample)
      .pipe(catchError(this.errorhandler))
  }
  errorhandler(error: HttpErrorResponse) {
    console.log(error.message)
    return Observable.throw(error.message || "Sever Error");
  }
}

