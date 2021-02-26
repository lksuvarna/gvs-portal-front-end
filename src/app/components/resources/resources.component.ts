import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';

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
  
  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice) { }
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
    
    this.servicesData = servicesData.data[0]
  
    
  }

  

}
