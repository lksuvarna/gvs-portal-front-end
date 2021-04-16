import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import {Location} from '@angular/common';	
import {Jabber_Delete} from '../../../../config/payload';	
import { servicenowservice } from '../../_services/servicenow.service';
import { ActivatedRoute } from '@angular/router';	
import { TranslateConfigService} from '../../_services/translate-config.service';

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
  Jabber:any = [];
  selected = true;
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  selectedJabber:any;
  reqFor: any;
  identifier:any
  countrydetails:any;
  cnum:any;
  orgi:any;
  reqno:any;
  service:any;
  pcode:any
  hideSteps = false
  sessionwarninginfo:any
  sessionwarninginfosnow:any
  isButtonVisible = true;	
  errorinfo=false;
  isSpinnerVisible= false; 
  warninginfo=false;
  warninginfosnow=false;
  constructor(private router:Router,private route: ActivatedRoute,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private servicenowservice:servicenowservice,private servicesd : TranslateConfigService) {
    if(this.Jabber[0]=='Select One'){
      this.selected = true;
    }}
    mainConfiguration :any;
    backClick(){	
      sessionStorage.setItem('backbutton','yes');	
      sessionStorage.setItem('step','step1');	
      this.location.back();	
    }	
    BackButton() {	
      this.isEntryForm = false;	
      this.isReviewForm = true;	
      this.fixedPhoneIdentifier = false;	
    }	
  
  

  entryDetails(formData: NgForm) {
    if(formData.value.Jabber_1.toUpperCase() == 'SELECT JABBER NUMBER' || formData.value.Jabber_1 == '') {
      alert(this.mainConfiguration.alerttranslation.selectlocation);
      return;
    }
    this.selectedJabber = formData.value.Jabber_1;
    this.isReviewForm = false;
    this.isEntryForm = true;

  }
  payload : Jabber_Delete = new Jabber_Delete();
  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-DS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
     
      this.payload.site_address ='';	
      //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.Identifier_Disp=this.selectedJabber	      	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_delete';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;    
      this.payload.country_code = this.countrydetails.code ;	
    
      
     // console.log('Payload');	
     // console.log(this.payload);	
     this.servicenowservice.submit_request_delete(this.payload).subscribe(data=> {	
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
 
  

  ngOnInit(): void {
    this.mainConfiguration = this.servicesd.readConfigFile();
    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
    })	
     // Submit to Snow Jabber new code added by Swarnava	
     this.orgi=this.cookie.getCookie('ccode');	
     this.cnum = sessionStorage.getItem('cnum') ;	
     this.countrydetails = sessionStorage.getItem('countrydetails');	
     this.countrydetails = JSON.parse(this.countrydetails);	
      // Submit to Snow Jabber new code added by Swarnava ends	
        
     this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.sessionwarninginfo=sessionStorage.getItem('warninginfo')
    this.sessionwarninginfosnow=sessionStorage.getItem('warninginfosnow')
    if (this.sessionwarninginfo =='false1'){
      this.warninginfo = true
    }
    else if(this.sessionwarninginfosnow =='true1') {
this.warninginfosnow=true
this.identifier=sessionStorage.getItem('identifier')
    }
    else{
      this.identifier=sessionStorage.getItem('identifier');
      this.identifier = this.identifier.split(',');
      this.Jabber = [...this.identifier];
      //this.Jabber.push(this.identifier)
    }
  const servicesData = { 	
    "data": [	
      {    	
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "step" : 3,	
        
      }	
    ]	

   
  }	
    
    this.servicesData = servicesData.data[0]
    this.reqFor = sessionStorage.getItem('radioAction')

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