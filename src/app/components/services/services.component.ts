import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute,Router } from '@angular/router';
import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  cloudantData: any = []
  servicesData: any = []
  pcountrydetails: any
  product: any
  products: any
  navcomponent: any
  countryname: any;
  ccode = '';
  countryroute: any
  pcode = '';
  service: any;
  pagedisplay:any;
  
  constructor(private router: Router,private cookie: CookieHandlerService, private cloudantservice: cloudantservice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
     
      this.pcode = params.country;
      this.service=params.service;	
      console.log("navigation component" + this.pcode);
      sessionStorage.setItem('serviceName', this.service);
    
    this.countryroute=sessionStorage.getItem('countryroute')
    
    const servicesData = {
      "data": [
        {
          "lhs": [
            { "name": "Services", "routingname": "/services", "indented": false, "highlighted": true },
            { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
          ],
          "services": ["Jabber", "Fixed Phone", "FAC Code / IDD PIN", "Special Request"],
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
    
  })
  }
}

