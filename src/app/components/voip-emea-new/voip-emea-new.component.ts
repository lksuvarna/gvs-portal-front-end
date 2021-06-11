import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Location} from '@angular/common';	
import { Create_Cache_jabber, Jabber_New } from 'config/payload';
import { NgForm } from '@angular/forms';
import { TranslateConfigService} from '../../_services/translate-config.service';

@Component({
  selector: 'app-voip-emea-new',
  templateUrl: './voip-emea-new.component.html',
  styleUrls: ['./voip-emea-new.component.css']
})
export class VoipEmeaNewComponent implements OnInit {

  payload : Jabber_New = new Jabber_New();
  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_disp : Create_Cache_jabber = new Create_Cache_jabber();
  reviewDetailsEMEA = {	
  
    officeLocation:	"",	
    campus:	"",	
    funded:	"",	
    chargeDepartmentCode:	"",	
    businessUnit:	"",	
    projectId: "",	
    fixPhoneIdentifier: " ",	
    Voice_Type_Disp : true,	
    icano_Disp : "",	
    Location_final :"",	
    accid_Disp: "",	
    reqno:""
    
  }
  
  // officeLocation = ["Select Location","Denmark", "Belgium"];
  ccode='';
  officeLocation = ""
  selectedLocationEmea = "";
  cloudantData: any = [];
  servicesData: any = [];
  reqno:any;
  cnum : any;
  countrydetails : any;	
  locationlist : any;
  isButtonVisible = true;	
  isSpinnerVisible= false; 	
  pcode: any;	
  service: any;	
  orgi:any;	
  reqFor: any;
  errorinfo=false;
  isEntryFormEmea = false;
  isReviewFormEmea = true;
  employeeInfo: any;	
  employeeInfo1: any;	
  hideProjectId = false;
  cache_tmp:  any = [];
  selected_location ="";
  locSelected : any
  campA: any = [];	
    camp: any = [];	
    buildA: any = [];	
    build: any = [];	
    j = 0;
    hideBuilding = true;	
    campus : any;




  entryDetailsEMEA(formData: NgForm) {	    
      
    if(formData.value.Location.toUpperCase() == 'SELECT LOCATION' || formData.value.Location == '') {	
      alert(this.mainConfiguration.alerttranslation.selectlocation);	
      return;	
    }
    
    this.selectedLocationEmea = formData.value.Location;
    this.reviewDetailsEMEA.Location_final = formData.value.Location;
    this.isEntryFormEmea = true;
    this.isReviewFormEmea = false;

    //set up the cache for form values.
    this.create_cache(formData);

  }

  BackButton(){
    this.isEntryFormEmea = false;
    this.isReviewFormEmea = true;
  }

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,public location:Location,private servicesd : TranslateConfigService) {}
  mainConfiguration :any;


  backClick(formData:NgForm){	
    sessionStorage.setItem('backbutton','yes');	
    sessionStorage.setItem('step','step1');	
    //this.location.back();	
    this.create_cache(formData);
    if(sessionStorage.getItem('radioAction')=='myself'){
      this.router.navigate(['employeesearch'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
    }
    else{
    this.router.navigate(['employeeinfo'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
  }	
  }

  selectedLocation(loc:String) {	
    this.build = [];	
    this.campus = '';	
    //alert("Location"+loc);
    if(loc != '') {	
      // this.hideBuilding = false;	
      var k =0;	
      //var f = 100;	
      //this.build[k] = this.buildA[0];	
      for(var i=0;i<this.campA.length;i++) {	
      if(loc == this.campA[i]) {        	
      this.build[k] = this.buildA[i];
      k = k+1;	
      }	
      }  	
    // alert("HIIII"+this.build);	
             
    } else {	
      this.hideBuilding = true;	
      this.build = [];	
    }	
  }

  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.Buildings_Disp=this.reviewDetailsEMEA.campus;	
      // by default set to true. below line can be removed if needed.	
      this.payload.Voice_Type_Disp = "No";
      this.payload.Projectid_Disp = this.reviewDetailsEMEA.projectId;	
      this.payload.icano_Disp = "";
      this.payload.identifier_hp_Disp = this.reviewDetailsEMEA.fixPhoneIdentifier;	
      this.payload.BusinessUnit_Disp =this.reviewDetailsEMEA.businessUnit;	
      this.payload.Department_number_Disp = this.reviewDetailsEMEA.chargeDepartmentCode;	

      this.locSelected = this.reviewDetailsEMEA.Location_final
      if(this.countrydetails.did_loc_formula){
        // Assign location value from cloudant. Needed for ITN allocation
        eval(this.countrydetails.did_loc_formula);
      } else {
        this.payload.Location_final = this.locSelected
      }

      this.payload.accid_Disp="";
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.level1_japproval=this.countrydetails.level1_japproval;	
      this.payload.level2_japproval=this.countrydetails.level2_japproval;	
      this.payload.SLA_type=this.countrydetails.SLA_type;	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_new';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.qag =this.countrydetails.qag ;	
      this.payload.class_of_serice =this.countrydetails.class_of_serice ;	
      this.payload.country_code = this.countrydetails.code ;	
      this.payload.default_call_permission=this.countrydetails.default_call_permission;
      
     // console.log('Payload');	
     // console.log(this.payload);	
     this.servicenowservice.submit_request(this.payload).subscribe(data=> {	
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
      this.cache.officeLocation = formData.value.Location;		
      sessionStorage.setItem('cache',JSON.stringify(this.cache));
      console.log("cached");
    }


  ngOnInit(): void {
    this.mainConfiguration = this.servicesd.readConfigFile();
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
    this.locationlist=sessionStorage.getItem('locationdetails')?.replace('"','')	
    this.locationlist=this.locationlist?.replace('"','').split(',');	
  
    for (var i = 0; i < this.locationlist.length; i++) {	
      var n = this.locationlist[i].indexOf("~")	
      this.campA[i] = this.locationlist[i].substr(1, n - 1);	
      this.buildA[i] = this.locationlist[i].substring(n + 2, this.locationlist[i].length - 1);	
    }	
    for (var i = 0; i < this.campA.length; i++) {	
      if (this.campA[i] != this.campA[i + 1]) {	
        this.camp[this.j] = this.campA[i];	
        this.j++;	
      }	
    }
    const servicesData = { 	
      "data": [	
        {    	
          	
          "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
          "step" : 3,	
          
        }	
      ]	
  
     
    }	
    this.reqFor = sessionStorage.getItem('radioAction')
    this.servicesData = servicesData.data[0];	
    //this.reviewDetailsIndia.reqno = "IN-NS-" + this.cnum.substring(0, 6) + "-" + (Math.floor(Math.random() * (this.max - this.min)) + this.min);	
    //alert(this.reviewDetailsIndia.reqno);	
    this.employeeInfo1 = sessionStorage.getItem('employeeInfo')	
    this.employeeInfo = JSON.parse(this.employeeInfo1);	
    if(this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null){
      this.hideProjectId = true;
      }

      //load cache data for entry details form. -- START
   this.cache_tmp=sessionStorage.getItem('cache')	
   console.log(this.cache_tmp);
   this.cache_disp=JSON.parse(this.cache_tmp);
   if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='jabber_new')){
   this.selected_location=String(this.cache_disp.officeLocation) ;    
   console.log("cache restored");
   }else{
     sessionStorage.removeItem('cache');
   }

   //Load Cache ends.
  }

  

  previousStep(event : any){
    this.isEntryFormEmea = false;	
    this.isReviewFormEmea = true;	
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