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
  Jabber = ['Select Jabber Number','23415678'];
  selected = true;
  reviewDetails = true;
  EntryDetails = false;
  selectedJabber:any;
 
 
  entryDetails(formData: NgForm) {
    if(formData.value.Jabber_1.toUpperCase() == 'SELECT JABBER NUMBER' || formData.value.Jabber_1 == '') {
      alert('Please select the Jabber Number');
      return;
    }
    this.selectedJabber = formData.value.Jabber_1;
    this.reviewDetails = false;
    this.EntryDetails = true;

  }

  BackButton() {
    this.reviewDetails = true;
    this.EntryDetails = false;
  }

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice) {
    if(this.Jabber[0]=='Select One'){
      this.selected = true;
    }
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
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": true},            
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
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
