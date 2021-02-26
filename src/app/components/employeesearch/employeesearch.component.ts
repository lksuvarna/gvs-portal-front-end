import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice) { }
  cloudantData: any = []
  servicesData: any = []
  countryname:any;
  ccode='';
  submit(){
    this.router.navigate(['/employeeinfo']) 
  }
  ngOnInit(): void {
    
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
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]
  
    }
  }
  
   
