import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  cloudantData: any = []
  servicesData: any = []
  product:any
  products:any
  navcomponent:any
  constructor() { }

  ngOnInit(): void {
     this.product=true
     this.products=false
     this.navcomponent="<app-middleframe></app-middleframe>"
  this.cloudantData  = {
    "code": "744",
    "name": "India",
    "isocode": "IN",
    "isjabber": true,
    "isfixedphone": false,
    "isfac": true,
    "isspecial": false,
    "isapproval": false,
    "isreval": false,
  }

  const servicesData = { 
  "data": [
    {    
      "lhs": [
        {"name" : "Services", "indented" : false, "highlighted": true},
        {"name" : "Approvals Pending", "indented" : true, "highlighted": false},
        {"name" : "Revalidation Pending", "indented" : false, "highlighted": false},
        {"name" : "Resources", "indented" : false, "highlighted": false},
        {"name" : "Requests", "indented" : false, "highlighted": false}
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

