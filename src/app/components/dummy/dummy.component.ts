import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Db2Service} from '../../_services/db2.service';
import { servicenowservice } from '../../_services/servicenow.service'


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private Db2Service: Db2Service, private servicenowservice: servicenowservice) { }
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
          this.Db2Service.search_db2('06685M744','fixedphone_delete','SEP006789TR7832','35301234','India').subscribe(data=> {
            console.log(' db2 response', data);
          });

          // Code to search Snow
          this.servicenowservice.searchsnow('06685M744','jabber_delete','IN-DS-06685M').subscribe(data => {
            console.log(' snow response', data);
           });
      
  
    }
    // Get NavigationStart events
 
  }

