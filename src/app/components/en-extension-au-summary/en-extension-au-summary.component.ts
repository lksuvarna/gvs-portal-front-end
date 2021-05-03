import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { Db2Service } from '../../_services/db2.service';
import { servicenowservice } from '../../_services/servicenow.service';

@Component({
  selector: 'app-en-extension-au-summary',
  templateUrl: './en-extension-au-summary.component.html',
  styleUrls: ['./en-extension-au-summary.component.css']
})
export class EnExtensionAuSummaryComponent implements OnInit {

  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  reqFor: any;
  service = '';
  cnum = '';
  fixedphone = '';
  countrydetails : any;
  orgi:any;	
  reqno:any;
  hideSteps = false;
  pcode: any;
  warninginfo=false;
  warninginfosnow=false; 
  serial:any;
  notesId:any;
  supplier:any;
  attribute8:any;
  itn:any;
  identifierEntered:any;
  itnentered:any;
  warningmessage:any = false;
  reviewDetails:any = true;
  phoneData:any;
  serviceDetails:any;
  userName:any;
  type:any;
  showloader = false
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private Db2Service: Db2Service,private servicenowservice:servicenowservice,private route: ActivatedRoute) {

   }
 
  EntryDetails(formData: NgForm) {

    if(formData.value.identifier == '') {
      alert('Please enter ITN number');
      return;
    }
    this.identifierEntered = formData.value.identifier;
    this.Db2Service.search_db2(this.cnum,"phone_search",this.fixedphone,this.identifierEntered,"Australia").subscribe(data =>{
      sessionStorage.setItem('PhoneData', JSON.stringify(data.message));
      this.phoneData = sessionStorage.getItem('PhoneData');
      this.phoneData = JSON.parse(this.phoneData)
      if(data.message != '')
      {
        this.serial = this.phoneData[0].CNUM;
        this.notesId = this.phoneData[0].NOTES_ID;
        this.supplier = this.phoneData[0].SUPPLIER;
        this.type = this.phoneData[0].TYPE.trim();
        this.type = this.type == 'ip'? "Jabber":(this.type == 'fac'? "FAC" : this.type);
        this.attribute8 = this.phoneData[0].ATTRIBUTE8;
        this.itn = this.phoneData[0].IDENTIFIER.trim();
        this.userName = this.notesId?.substring(this.notesId.indexOf('=')+1,this.notesId.indexOf('/'));
        this.serviceDetails = this.itn + " - " + this.type + " - " + this.supplier;
        this.warningmessage = false;
        this.reviewDetails = false;
      }
      if(data.message == '')
      {
        this.warningmessage = true;
        this.reviewDetails = true;
      }
      this.isReviewForm = false;
      this.isEntryForm = true;
      this.showloader = false;
    },
    (error) => {                              //Error callback
      console.error('error caught in component' + error);
      // this.errorinfo = true;
      this.showloader = false;
    });
    this.showloader = true;
  }
  // Submit to Snow Jabber new code added by Swarnava ends	
  backClick() {
    sessionStorage.setItem('backbutton', 'yes');
    sessionStorage.setItem('step', 'step1');
    this.location.back();
  }

  BackButton() {
    this.isReviewForm = true;
    this.isEntryForm = false;
  }


  ngOnInit(): void {

    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
    })	
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
      "isspecial": this.countryname.isspecial,
      "isphonenumbersearch": this.countryname.isphonenumbersearch
    }
  });
  const servicesData = { 	
    "data": [	
      {    		
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "step" : 1,	
        
      }	
    ]	

   
  }	
  
  //this.reqFor = sessionStorage.getItem('radioAction');
    this.servicesData = servicesData.data[0]
    this.showloader = false;
  }
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    // this.fixedPhoneIdentifier = false;	
  }
  

}

