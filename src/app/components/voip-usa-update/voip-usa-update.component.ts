import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { Db2Service } from '../../_services/db2.service';
import {Jabber_Update} from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';

@Component({
  selector: 'app-voip-usa-update',
  templateUrl: './voip-usa-update.component.html',
  styleUrls: ['./voip-usa-update.component.css']
})
export class VoipUsaUpdateComponent implements OnInit {
  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  Jabber:any = [];
  itns:any = [];
  Jabber_Identifier:any;
  selected = true;
  hideChargeDept = true;
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  jabberDisp:any;
  chargeDisp:any;
  errorinfo=false;
  reqFor: any;
  employeeSerial = '';
  service = '';
  cnum: any;
  countrydetails : any;
  orgi:any;	
  reqno:any;
  hideSteps = false
  isButtonVisible = true;	
  isSpinnerVisible= false;
  pcode: any;
  sessionwarninginfo:any;
  sessionwarninginfosnow:any;
  warninginfo=false;
  warninginfosnow=false;
  identifier:any;
  accountid_Disp : any;

  payload : Jabber_Update = new Jabber_Update();

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
    
    if(formData.value.account_id.includes(" ")) {
      alert('Please enter the correct Account ID');
      return;
    }
    if(formData.value.account_id.toUpperCase() == '') {
      alert('Please enter Account ID');
      return;
    }

    if(formData.value.account_id.length<4) {
      alert('Account ID can not be less than 4 characters');
      return;
    }

    this.jabberDisp = formData.value.Jabber_1;
    this.accountid_Disp = formData.value.account_id;
    this.isReviewForm = false;
    this.isEntryForm = true;
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

  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-US-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.Projectid_Disp = '';
      this.payload.icano_Disp = '' ;	
      //this.payload.Department_number_Disp = this.chargeDisp;
      this.payload.accid_Disp = this.accountid_Disp;
      this.payload.Identifier_Selected = this.jabberDisp;
      this.payload.updated_for = '';
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_update';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.prov_type=this.countrydetails.provision_type;
      this.payload.Current_COS='';
      this.payload.Current_VM='';
      this.payload.Justification='';
      this.payload.New_Voice='';
      this.payload.New_COS='';
      	
     this.servicenowservice.submit_request_update(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ queryParams: { country: this.pcode,service:this.service }}) ;	
     },
     (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.isSpinnerVisible= false; 	
      this.errorinfo=true;
      this.isButtonVisible=true;
    });	
     }	
   
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private Db2Service: Db2Service,private servicenowservice:servicenowservice,private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    // Submit to Snow Jabber Update code
    this.cnum = sessionStorage.getItem('cnum');
    this.orgi = this.cookie.getCookie('ccode');
    this.countrydetails = sessionStorage.getItem('countrydetails');
    this.countrydetails = JSON.parse(this.countrydetails);

    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.sessionwarninginfo = sessionStorage.getItem('warninginfo')
    this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow')
    if (this.sessionwarninginfo == 'false1') {
      this.warninginfo = true
    }
    else if (this.sessionwarninginfosnow == 'true1') {
      this.warninginfosnow = true
      this.identifier = sessionStorage.getItem('identifier')?.replace(" ","");
    }
    else {
      this.identifier = sessionStorage.getItem('identifier')
      this.identifier = this.identifier.split(',');
      this.Jabber = [...this.identifier];
    }
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
      "isspecial": this.countryname.isspecial
    }
  });
  const servicesData = { 	
    "data": [	
      {    		
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "step" : 3,	
        
      }	
    ]	

   
  }	
  
  this.reqFor = sessionStorage.getItem('radioAction');
    this.servicesData = servicesData.data[0]

    if(this.warninginfo || this.warninginfosnow){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }
  }
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
  }
  

}
function gettime() {	
  var date=new Date();	
  var minutes1='';	
  var seconds1='';  	
  var seconds = date.getSeconds();	
  var minutes = date.getMinutes();  	
  if(minutes < 10) {minutes1='0'+minutes}	
  else{minutes1=''+minutes}	
  if(seconds < 10) {seconds1='0'+seconds}	
  else{seconds1=''+seconds}	
    console.log(minutes1+seconds1)	
  return minutes1+seconds1;	
} 
