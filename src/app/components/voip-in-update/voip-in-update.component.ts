import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-voip-in-update',
  templateUrl: './voip-in-update.component.html',
  styleUrls: ['./voip-in-update.component.css']
})
export class VoipInUpdateComponent implements OnInit {
  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  Jabber = ['22345678','23451678'];
  selected = true;
  hideChargeDept = true;
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  jabberDisp:any;
  chargeDisp:any;
  reqFor: any;

  SelectedJabber(jabber:any) {
    if(jabber != ""){
      this.hideChargeDept = false;
    } else {
      this.hideChargeDept = true;
    }
  }
 
  EntryDetails(formData: NgForm) {
    if(formData.value.Jabber_1.toUpperCase() == 'SELECT ONE' || formData.value.Jabber_1 == '') {
      alert('Please select the jabber number to update');
      return;
    }
    if(formData.value.Charge_Dept.toUpperCase() == 'NA') {
      alert('No value is changed, so Update request is not required');
      return;
    }
    this.jabberDisp = formData.value.Jabber_1;
    this.chargeDisp = formData.value.Charge_Dept;
    this.isReviewForm = false;
    this.isEntryForm = true;
  }

  BackButton() {
    this.isReviewForm = true;
    this.isEntryForm = false;
  }

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice) {

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
