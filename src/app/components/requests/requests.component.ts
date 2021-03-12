import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import {servicenowservice} from '../../_services/servicenow.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests = [
      {fl_typesnow:"GVS FAC Code - Create",fl_date_submittedsnow:"01/06/2021",fl_statussnow:"Completed",fl_ReqNumbersnow:"IN-NS-06685M-5121",fl_reqcomments:"none"},
     ];
  
  DisplayModel= 'none';
  allComments = [];

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice) { }
  
  servicesData: any = []
  countryname:any;
  countrydetails:any;
  data1:any;
  snowdata:any;
  openNav(comments:any) {
    this.DisplayModel = 'block';
    this.allComments = comments;
    this.allComments
  }
  closeNav() {
    this.DisplayModel = 'none';
  }
  ngOnInit(): void {   
    this.snowdata=sessionStorage.getItem('identifier');
    console.log("from requests"+this.snowdata)
    this.snowdata=JSON.stringify(this.snowdata);
    console.log("from requests"+this.snowdata[0].number)
    const servicesData = { 
    "data": [
      {    
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
      }
    ]
  }
    
    this.servicesData = servicesData.data[0];

    

}

}
