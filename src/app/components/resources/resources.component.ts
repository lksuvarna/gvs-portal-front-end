import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Db2Service} from '../../_services/db2.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources = [
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69501765",fl_additional_information:"none"},
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69512345",fl_additional_information:"none"},
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69512351",fl_additional_information:"none"},
    {fl_resoucetype:"Jabber",fl_supplier:"Cisco",fl_phone_number:"69502111",fl_additional_information:"none"},
    {fl_resoucetype:"Jabber",fl_supplier:"Cisco",fl_phone_number:"69501222",fl_additional_information:"NA"}
  ];
  
  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private Db2Service: Db2Service) { }
  cloudantData: any = []
  servicesData: any = []
  countryname:any;
  ccode='';

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
        
      }]
  }
    
    this.servicesData = servicesData.data[0];
    
      // Code to search Db2 for resrouces
      this.Db2Service.search_db2('06685M744','all').subscribe(data=> {
        console.log(' db2 response', data);
      });
  
    
  }

  

}
