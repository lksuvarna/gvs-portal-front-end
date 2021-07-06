import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import {Location} from '@angular/common';	
import {Create_Cache_jabber, Jabber_Delete} from '../../../../config/payload';	
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
  cache_tmp:  any = [];
  selected_jabber ="";
  textSuggetion: any;
  dbdata : any;
  data : any;
  flowState : any;

  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_disp : Create_Cache_jabber = new Create_Cache_jabber();

  constructor(private router:Router,private route: ActivatedRoute,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private servicenowservice:servicenowservice,private servicesd : TranslateConfigService) {
    if(this.Jabber[0]=='Select One'){
      this.selected = true;
    }}
    mainConfiguration :any;

    backClick(formData: NgForm){	
      sessionStorage.setItem('backbutton','yes');	
      sessionStorage.setItem('step','step1');	
     // this.location.back();	
       //set up the cache for form values.
    this.create_cache(formData);
    if(sessionStorage.getItem('radioAction')=='myself'){
      this.router.navigate(['employeesearch'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
    }
    else{
    this.router.navigate(['employeeinfo'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
  }	
    }	

    BackButton() {	
      this.isEntryForm = false;	
      this.isReviewForm = true;	
      this.fixedPhoneIdentifier = false;	
    }	
  
  

  entryDetails(formData: NgForm) {
    if(formData.value.Jabber_1.toUpperCase() == 'SELECT ONE' || formData.value.Jabber_1 == '') {
      alert(this.mainConfiguration.alerttranslation.selectjabbernumberdel);
      return;
    }
    this.selectedJabber = formData.value.Jabber_1;
    this.isReviewForm = false;
    this.isEntryForm = true;
    this.errorinfo=false;
     //set up the cache for form values.
     this.create_cache(formData);

  }
  payload : Jabber_Delete = new Jabber_Delete();
  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-DS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;
      var att;	
      if(this.countrydetails.jabberloc)
      {
          att=this.countrydetails.jabberloc
     }
   else{
     att='ATTRIBUTE7'
     }
     
      this.payload.site_address =eval('this.data[0].'+att)	
      //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.Identifier_Disp=this.selectedJabber.substring(0,8)	      	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_delete';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;    
      this.payload.country_code = this.countrydetails.code ;
      this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.flowState = this.flowState;
      
     // console.log('Payload');	
     // console.log(this.payload);	
     this.servicenowservice.submit_request_delete(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ skipLocationChange: true , queryParams: { country: this.pcode,service:this.service }}) ;	
     },
     (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.isSpinnerVisible= false; 	
      this.errorinfo=true;
      this.isButtonVisible=true;
    });	
     }	
 
     create_cache(formData:NgForm){
      console.log("Starting Cache");
      this.cache.setflag=true;
      this.cache.cnum=this.cnum;
      this.cache.selected_jabber = formData.value.Jabber_1;		
      sessionStorage.setItem('cache',JSON.stringify(this.cache));
      console.log("cached" + JSON.stringify(this.cache));
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

    this.flowState = sessionStorage.getItem('flowState');
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
    //  this.identifier=sessionStorage.getItem('identifier');
      //this.identifier = this.identifier.split(',');
      //this.Jabber = [...this.identifier];
    this.dbdata=sessionStorage.getItem('identifier');
    console.log(JSON.parse(this.dbdata).identifier);    
    var parsed = JSON.parse(JSON.stringify(JSON.parse(this.dbdata)));
    this.data = parsed;   
    console.log("data of display");
    console.log(this.data);
    }

  
    
    
   

  const servicesData = { 	
    "data": [	
      {    	
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
        "step" : 3,	
        
      }	
    ]	

   
  }	
    
    this.servicesData = servicesData.data[0]
    this.reqFor = sessionStorage.getItem('radioAction')

    if(this.warninginfo || this.warninginfosnow){
      this.hideSteps = true;
      this.textSuggetion = false;
      } else {
      this.hideSteps = false;
      this.textSuggetion = true;
      }

     //load cache data for entry details form. -- START
   this.cache_tmp=sessionStorage.getItem('cache')	
   console.log(this.cache_tmp);
   this.cache_disp=JSON.parse(this.cache_tmp);
   if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='jabber_delete')){
   this.selected_jabber=String(this.cache_disp.selected_jabber) ;    
   console.log("cache restored");
   }else{
     sessionStorage.removeItem('cache');
   }

   //Load Cache ends.
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