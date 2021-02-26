import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute) { }
  
  servicesData: any = []
  countryname:any;
  
  data1:any
  openNav(comments:any) {
    this.DisplayModel = 'block';
    this.allComments = comments;
    this.allComments
  }
  closeNav() {
    this.DisplayModel = 'none';
  }
  ngOnInit(): void {   
    
    const servicesData = { 
    "data": [
      {    
        "lhs": [
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": false},
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": true}
        ],
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]  

}

}
