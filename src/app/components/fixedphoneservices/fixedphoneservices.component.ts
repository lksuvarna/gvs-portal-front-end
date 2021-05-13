import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixedphoneservices',
  templateUrl: './fixedphoneservices.component.html',
  styleUrls: ['./fixedphoneservices.component.css']
})
export class FixedphoneservicesComponent implements OnInit {

  servicesData: any = []
  countryname:any;
  countrydetails:any;
  ccode='';
  pcode = '';
  linkv:any;
  countryroute:any

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.pcode = params.country;
        console.log("navigation component" + this.pcode);
        this.countryroute=sessionStorage.getItem('countryroute')
      //  if(sessionStorage.getItem('countrydetails')==undefined){
        if (this.pcode!== this.countryroute){
          this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
            
            console.log('Response received navigation', data.countrydetails.isspecial);
            this.countryname = data.countrydetails;
            sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
            this.countrydetails=JSON.stringify(data.countrydetails);
            this.countrydetails = JSON.parse(this.countrydetails)
            this.linkv=this.countrydetails.fservices})}
  else{
        this.countrydetails = sessionStorage.getItem('countrydetails');	
        this.countrydetails = JSON.parse(this.countrydetails);
     this.linkv=this.countrydetails.fservices}
      
   
    
      const servicesData = { 
      "data": [
        {    
          "lhs": [
            {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": false},
            {"name" : "Jabber","routingname":"/services", "indented" : true, "highlighted": false},  
            {"name" : "Fixed Phone","routingname":"/services", "indented" : true, "highlighted": true},
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
      if(sessionStorage.getItem('radioAction')=== null)
    {
      
    }
    else{
      sessionStorage.setItem('radioAction','myself')      
      sessionStorage.setItem('empserial','')
      
      
    }
    })
      } 

}
