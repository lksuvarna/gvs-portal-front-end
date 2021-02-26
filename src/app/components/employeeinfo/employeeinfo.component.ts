import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Router} from  '@angular/router';
import {Db2Service} from '../../_services/db2.service'
import {servicenowservice} from '../../_services/servicenow.service'

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {


  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private Db2Service: Db2Service, private servicenowservice:servicenowservice) { }
  countryname:any;
  ccode='';
  cloudantData: any = []
  servicesData: any = []
  submit(){
    this.router.navigate(['/entrydetails']) }

  

  employeeInfo = {

    employeeName: "Manisha, Kankanampati",
    jobResponsibility: "ServiceNow developer",
    businessUnit: "GBS",
    department: "JDP",
    country: "India",
    email: "Kankanampati.Manisha@ibm.com"
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
      
      this.servicesData = servicesData.data[0];

      // Code to search Db2 for Jabber New
      this.Db2Service.search_db2('06685M744','jabber_new').subscribe(data=> {
        console.log(' db2 response', data);
      });

      //code to search snow for jabber new
      this.servicenowservice.searchsnow('000RQU744','jabber_new').subscribe(data=> {
        console.log(' snow response', data);
      });
  }
    }
    
