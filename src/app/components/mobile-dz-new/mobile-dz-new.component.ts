import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';
import { servicenowservice } from '../../_services/servicenow.service';	
import { Create_Cache_mobile, Mobile_New} from '../../../../config/payload';

@Component({
  selector: 'app-mobile-dz-new',
  templateUrl: './mobile-dz-new.component.html',
  styleUrls: ['./mobile-dz-new.component.css']
})
export class MobileDzNewComponent implements OnInit {



  build: any = [];
  campus:any;
  camp: any = [];	
  campA: any = [];	
  buildA: any =[];
  isEntryForm = false;
  isReviewForm = true;
  cloudantData: any = [];
  servicesData: any = [];
  isSpinnerVisible= false;
  hideDeptCode = true;
  reqFor: any;
  hideBuilding = true;
  errorinfo=false;
  pcode: any;
  service: any;	
  Voice_Type = "No";
  hideValidity = true;
  reqno:any;	
  cache_tmp:  any = []
  selected_location ="";
  selected_campus="";
  chargeDepartmentCode:any = '';
  Comments = ''
  Fac_Type = ''
  authLevel = ''
  validity = ''

  employeeInfo: any;
  employeeInfo1: any;
  hideProjectId = false;
  isButtonVisible = true;

  payload : Mobile_New = new Mobile_New();
  countrydetails: any;
  cnum: any;
  orgi: any;
  ccode: any;
  locationlist: any;
  j=0;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { }

  cache : Create_Cache_mobile = new Create_Cache_mobile();
  cache_disp : Create_Cache_mobile = new Create_Cache_mobile();

  reviewDetailsIndia = {	
    Comments:""
  }	

 backClick(formData:NgForm): void{	
  sessionStorage.setItem('backbutton','yes');	
  sessionStorage.setItem('step','step1');	
  //this.location.back();	
  this.create_cache(formData);
  if(sessionStorage.getItem('radioAction')=='myself'){
    this.router.navigate(['employeesearch'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
  }
  else{
  this.router.navigate(['employeeinfo'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
}	}

  entryDetailsMobile(formData: NgForm) {	
    if( formData.value.Comments.trim() === '') {	
      alert('Please provide business justification');	
      return;	
    }	

    if( formData.value.Comments.trim().length < 4) {	
      alert('Justification length should be atleast 4 characters');	
      return;	
    }	
  
    this.isEntryForm = true;	
    this.isReviewForm = false;	

    this.reviewDetailsIndia.Comments = formData.value.Comments.replace(/[\n\r+]/g, ' ');	
   // set up the cache for form values.
    this.create_cache(formData);

  }	

   create_cache(formData:NgForm){
    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.Comments= formData.value.Comments;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
  }

  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    
  }	

  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.comments =this.reviewDetailsIndia.Comments;	
      // fields to be picked up from form -- ends	
      this.payload.ReqNo=this.reqno;	
      this.payload.level1_japproval=this.countrydetails.level1_japproval;	
      this.payload.level2_japproval=this.countrydetails.level2_japproval;	
      this.payload.SLA_type=this.countrydetails.SLA_type;	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='mobile_new';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.qag =this.countrydetails.qag ;	
      this.payload.class_of_serice =this.countrydetails.class_of_serice ;	
      this.payload.country_code = this.countrydetails.code ;	
      this.payload.default_call_permission=this.countrydetails.default_call_permission;
      
     // console.log('Payload');	
     // console.log(this.payload);	
     this.servicenowservice.submit_request_mobile_new(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ skipLocationChange: true , queryParams: { country: this.pcode,service:this.service }}) ;	
     },
     (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.isSpinnerVisible= false; 	
      this.errorinfo=true;
      this.isButtonVisible=true;
    }
     );	

     }	


  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    	
  }

  ngOnInit(): void {

    // Submit to Snow Jabber new code added by Swarnava	
    this.orgi=this.cookie.getCookie('ccode');	
    this.cnum = sessionStorage.getItem('cnum') ;	
    this.countrydetails = sessionStorage.getItem('countrydetails');	
    this.countrydetails = JSON.parse(this.countrydetails);	
     // Submit to Snow Jabber new code added by Swarnava ends	
       
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);	
    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
    })	    
    
    this.route.queryParams
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
    })

    const servicesData = { 	
      "data": [	
        {    	       	
          "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request","Mobile"], 
          "step" : 3,	 
        }	
      ]	
    }
    
    this.reqFor = sessionStorage.getItem('radioAction')
    this.servicesData = servicesData.data[0];

    this.employeeInfo1 = sessionStorage.getItem('employeeInfo')	
    this.employeeInfo = JSON.parse(this.employeeInfo1);	

  //load cache data for entry details form. -- START
    this.cache_tmp=sessionStorage.getItem('cache')	
    console.log(this.cache_tmp);
    this.cache_disp=JSON.parse(this.cache_tmp);

    if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='mobile_new')){
        this.Comments= String(this.cache_disp.Comments);
        console.log("cache restored");
    }else{
      sessionStorage.removeItem('cache');
    }

    //load cache data for entry details form. -- End

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