import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-voip-in-delete',
  templateUrl: './voip-in-delete.component.html',
  styleUrls: ['./voip-in-delete.component.css']
})
export class VoipInDeleteComponent implements OnInit {

  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  Jabber = ['25432121','23415678'];
  selected = true;
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  selectedJabber:any;
  reqFor: any;
 
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice) {
    if(this.Jabber[0]=='Select One'){
      this.selected = true;
    }
   }
  

  entryDetails(formData: NgForm) {
    if(formData.value.Jabber_1.toUpperCase() == 'SELECT JABBER NUMBER' || formData.value.Jabber_1 == '') {
      alert('Please select the Jabber Number');
      return;
    }
    this.selectedJabber = formData.value.Jabber_1;
    this.isReviewForm = false;
    this.isEntryForm = true;

  }

  BackButton() {
    this.isReviewForm = true;
    this.isEntryForm = false;
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
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": false}, 	
          { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },           	
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},	
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},	
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},	
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}	
        ],	
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "step" : 3,	
        
      }	
    ]	

   
  }	
    
    this.servicesData = servicesData.data[0]
  }
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
  }

}
