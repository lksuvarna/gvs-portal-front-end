import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Db2Service} from '../../_services/db2.service';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private Db2Service: Db2Service) { }
  countryname:any;
  ccode='';
  cloudantData: any = []
   servicesData: any=[]
  ngOnInit(): void {
     //**
    
 
  const servicesData = { 
    "data": [
      {    
        "lhs": [
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": true},
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
        ],
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"]        
        
      }
    ]
  }
    
    this.servicesData = servicesData.data[0];
          // Code to search Db2 for resrouces
          this.Db2Service.search_db2('06685M744','all').subscribe(data=> {
            console.log(' db2 response', data);
          });
      
  
    }
    // Get NavigationStart events
 
  }

