import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facservices',
  templateUrl: './facservices.component.html',
  styleUrls: ['./facservices.component.css']
})
export class FacservicesComponent implements OnInit {
  facIn: boolean = false;

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute) { }
  
  servicesData: any = []
  countryname:any;
  countrydetails:any;
  ccode='';
  pcode = '';
  linkv:any;
  countryroute:any
    ngOnInit(): void {
      this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.pcode = params.country;
        console.log("navigation component" + this.pcode);
        this.countryroute=sessionStorage.getItem('countryroute')
       // if(sessionStorage.getItem('countrydetails')==undefined){
        if (this.pcode!== this.countryroute){
          this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {            
            
            this.countryname = data.countrydetails;
            sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
            this.countrydetails=JSON.stringify(data.countrydetails);
            this.countrydetails = JSON.parse(this.countrydetails)
            this.linkv=this.countrydetails.facservices})}
       else{
        this.countrydetails = sessionStorage.getItem('countrydetails');	
        this.countrydetails = JSON.parse(this.countrydetails);
        this.linkv=this.countrydetails.facservices
      }      
   
      
      const servicesData = { 
      "data": [
        {    
          "lhs": [
            {"name" : "Services","routingname":"/services", "indented" : true, "highlighted": false},
            {"name" : "Jabber","routingname":"/services", "indented" : true, "highlighted": false}, 
            {"name" : "FAC Code / IDD PIN","routingname":"/services", "indented" : true, "highlighted": true}, 
            {"name" : "Fixed Phone","routingname":"/services", "indented" : true, "highlighted": false},
            {"name" : "Special Request","routingname":"/services", "indented" : true, "highlighted": false},            
            {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
          ],
          "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
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
