import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {


  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice) { }
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
     
      this.ccode=this.cookie.getCookie('ccode').substring(6,9);
      this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
        console.log('Response received', data.countrydetails.name);
        this.countryname=data.countrydetails;
      
      this.cloudantData  = {
        "code": this.ccode,
        "name": this.countryname.name,
        "isocode": this.countryname.isocode,
        "isjabber": this.countryname.isjabber,
        "isfixedphone": this.countryname.isfixphone,
        "isfac": this.countryname.isfac,
        "isspecial": this.countryname.isspecial
      }
    });
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
          "titles": [
            "Terms of use",
            "Useful Information",
            "Please bear in mind the following points when making a request :"
          ],
          "usefulinfotexts": [
            "To make a request the Employee must exist in BluePages (except for cancellation requests).",
            "You must know the IBM serial Number of the person making the request.",
            "Only one request per employee per request type is processed at a time."
          ],
          "termsurl": "https://w3.ibm.com/w3/info_terms_of_use.html"
        }
      ]
    }
      
      this.servicesData = servicesData.data[0]
    
      }
    }
    
