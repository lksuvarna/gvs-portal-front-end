import { Component, Input, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jabberservices',
  templateUrl: './jabberservices.component.html',
  styleUrls: ['./jabberservices.component.css']
})
export class JabberservicesComponent implements OnInit {

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute) { }
  //cloudantData: any = []
  
  servicesData: any = []
  countryname:any;
  ccode='';
  pcode = '';
    ngOnInit(): void {
      this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.pcode = params.country;
        console.log("navigation component" + this.pcode);
      })
      if(sessionStorage.getItem('radioAction')=== null)
    {
      
    }
    else{
      sessionStorage.setItem('radioAction','myself')      
      sessionStorage.setItem('empserial','')
      
      
    }
      const servicesData = { 
      "data": [
        {    
          "lhs": [
            {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": false},
            {"name" : "Jabber","routingname":"/services", "indented" : true, "highlighted": true},  
            {"name" : "Fixed Phone","routingname":"/services", "indented" : true, "highlighted": false},
            {"name" : "Special Request","routingname":"/services", "indented" : true, "highlighted": false},            
            {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
          ],
          "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        }]
    }
      
      this.servicesData = servicesData.data[0]
    
      }
    }
    
