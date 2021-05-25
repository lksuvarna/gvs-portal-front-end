import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-middleframe',
  templateUrl: './middleframe.component.html',
  styleUrls: ['./middleframe.component.css']
})
export class MiddleframeComponent implements OnInit {
  facIn: boolean = false

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute) { }
  cloudantData: any = []
  servicesData: any = []
  countryname:any;
  pcountrydetails:any
  pcode = '';
  ccode='';
  countryroute :any
  countrydetails:any
  parcountrydetails:any
  fixphoneVisibility:any
  loggedinuser:any
    ngOnInit(): void {
      
      this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.pcode = params.country;
        console.log("navigation component country route" + this.countryroute );
        console.log("navigation component middelframe123" + this.pcode);
      
      this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
      this.countryroute = sessionStorage.getItem('countryroute');
      console.log("navigation component country route" + this.countryroute );

      
    if (this.pcode== this.countryroute) {
      this.pcountrydetails = sessionStorage.getItem('countrydetails')
      console.log("navigationsession storageif" + JSON.parse(this.pcountrydetails).code)
      this.countryname = JSON.parse(this.pcountrydetails)
      this.loggedinuser = this.cookie.getCookie('ccode');
      if(this.countryname.fixphone_visibility == false) { //Add country pcode here if ACL Applicable
        if(this.countryname.auth_fixphone.includes(this.loggedinuser)) {
        this.fixphoneVisibility = true;
        } else {
          this.fixphoneVisibility = false;
        }
      } else {
        this.fixphoneVisibility = this.countryname.isfixphone;
      }

      this.cloudantData = {
        "code": this.ccode,
        "name": this.countryname.name,
        "isocode": this.countryname.isocode,
        "isjabber": this.countryname.isjabber,
        "isfixedphone": this.fixphoneVisibility,
        "isfac": this.countryname.isfac,
        "ismobile": this.countryname.ismobile,
        "isspecial": this.countryname.isspecial,
        "isreval": this.countryname.isreval,
        "isapproval":this.countryname.isapproval,
        "isjabbernew":this.countryname.isjabbernew,
        "isjabberdelete":this.countryname.isjabberdelete,
        "isjabbermove":this.countryname.isjabbermove,
        "isjabberupdate":this.countryname.isjabberupdate
      }

    }
    else {
      console.log("navigation componentelse" + this.ccode);
      this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
        console.log('Response received navigation', data.countrydetails.isspecial);
        this.countryname = data.countrydetails;
        sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
        sessionStorage.setItem('countryroute', this.pcode);
        this.loggedinuser = this.cookie.getCookie('ccode');
        if(this.countryname.fixphone_visibility == false) { //Add country pcode here if ACL Applicable
          if(this.countryname.auth_fixphone.includes(this.loggedinuser)) {
          this.fixphoneVisibility = true;
          } else {
            this.fixphoneVisibility = false;
          }
        } else {
          this.fixphoneVisibility = this.countryname.isfixphone;
        }

        this.cloudantData = {
          "code": this.pcode,
          "name": this.countryname.name,
          "isocode": this.countryname.isocode,
          "isjabber": this.countryname.isjabber,
          "isfixedphone": this.fixphoneVisibility,
          "isfac": this.countryname.isfac,
          "ismobile": this.countryname.ismobile,
          "isspecial": this.countryname.isspecial,
          "isreval": this.countryname.isreval,
        "isapproval":this.countryname.isapproval,
        "isjabbernew":this.countryname.isjabbernew,
        "isjabberdelete":this.countryname.isjabberdelete,
        "isjabbermove":this.countryname.isjabbermove,
        "isjabberupdate":this.countryname.isjabberupdate
        }
      });

    }
      const servicesData = { 
      "data": [
        {    
          "lhs": [
            {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": true},
            {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Revalidation Pending","routingname":"/approvalpending", "indented" : false, "highlighted": false},
            {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
            {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
         ],
          "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request","Mobile"], 
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

