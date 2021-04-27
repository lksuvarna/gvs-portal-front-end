import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';
import { servicenowservice } from '../../_services/servicenow.service';	
import {Fac_New} from '../../../../config/payload';

@Component({
  selector: 'app-fac-in-new',
  templateUrl: './fac-in-new.component.html',
  styleUrls: ['./fac-in-new.component.css']
})
export class FacInNewComponent implements OnInit {



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

  employeeInfo: any;
  employeeInfo1: any;
  hideProjectId = false;
  isButtonVisible = true;

  payload : Fac_New = new Fac_New();
  countrydetails: any;
  cnum: any;
  orgi: any;
  ccode: any;
  locationlist: any;
  j=0;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { }

  reviewDetailsIndia = {	
  
    officeLocation:	"",	
    campus:	"",	
    funded:	"",	
    chargeDepartmentCode:	"",	
    businessUnit:	"",	
    Department_number: "",	
    authLevel:"",
    Fac_Type:"",
    validity:"",
    Comments:"",
    reqno:"",
    authValue: ""	
  }	

  backClick(){	
    sessionStorage.setItem('backbutton','yes');	
    sessionStorage.setItem('step','step1');	
    this.location.back();	
  }

  selectedLocation(loc:String) {	
    this.build = [];	
    this.campus = '';	
    //alert("Location"+loc);
    if(loc != '') {	
      this.hideBuilding = false;	
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

  FacCodeType(type : string){
    if (type === 'Temporary') {
      this.hideValidity = false;	
    } else {
      this.hideValidity = true;	
    }
  }

  showChargeDepartmentCode() {	
    this.hideDeptCode = false;	
  }	
  
  hideChargeDepartmentCode() {	
    this.hideDeptCode = true;	
  }	

  entryDetailsFac(formData: NgForm) {	
      
    if(formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {	
      alert('Please select the Office Location');	
      return;	
    }	
    if(formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '' || formData.value.Location_1.toUpperCase() != 'SELECT OFFICE LOCATION' && formData.value.Buildings == '') {	
      alert('Please select the Campus');	
      return;	
    }	
    if(formData.value.chargeDepartmentCode.trim() === '' && this.hideDeptCode == false) {	
      alert('Please enter the Charge Department Code');	
      return;	
    }	

    if(formData.value.authLevel.toLowerCase() === 'select authorization level' || formData.value.authLevel === '') {	
      alert('Please select an authorization level');	
      return;	
    }	

    if(formData.value.Fac_Type.toLowerCase() === 'select fac code type' || formData.value.Fac_Type === '') {	
      alert('Please select a FAC code type');	
      return;	
    }	

    if((formData.value.validity.toLowerCase() === 'select validity' || formData.value.validity === '' ) && this.hideValidity === false) {	
      alert('Please select a validity');	
      return;	
    }	

    if( formData.value.Comments.trim() === '') {	
      alert('Please provide business justification');	
      return;	
    }	
  
    this.isEntryForm = true;	
    this.isReviewForm = false;	
  
    this.reviewDetailsIndia.officeLocation = formData.value.Location_1;	
    this.reviewDetailsIndia.campus = formData.value.Buildings;	
    this.reviewDetailsIndia.funded = formData.value.Voice_Type;		
    this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;
    this.reviewDetailsIndia.Department_number = this.employeeInfo.department;
    this.reviewDetailsIndia.chargeDepartmentCode = formData.value.chargeDepartmentCode;	
    this.reviewDetailsIndia.authLevel = formData.value.authLevel;	
    this.reviewDetailsIndia.Fac_Type = formData.value.Fac_Type;	
    this.reviewDetailsIndia.validity = formData.value.validity;	
    this.reviewDetailsIndia.Comments = formData.value.Comments.replace(/[\n\r+]/g, ' ');	

    if(formData.value.authLevel==='STD'){
      this.reviewDetailsIndia.authValue = '4'
    } else if (formData.value.authLevel==='Local') {
      this.reviewDetailsIndia.authValue = '3'
    } else if (formData.value.authLevel==='ISD') {
      this.reviewDetailsIndia.authValue = '5'
    } else {
      this.reviewDetailsIndia.authValue = ''
    }

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
      this.payload.Location_final =this.reviewDetailsIndia.officeLocation;	
      this.payload.Buildings_Disp=this.reviewDetailsIndia.campus;		
      this.payload.Voice_Type_Disp=this.reviewDetailsIndia.funded;		
      this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;		
      this.payload.BusinessUnit_Disp = this.reviewDetailsIndia.businessUnit	
      this.payload.Dept_IN=this.reviewDetailsIndia.Department_number;		
      this.payload.authLevel_final=this.reviewDetailsIndia.authLevel;		
      this.payload.Fac_Type_disp=this.reviewDetailsIndia.Fac_Type;		
      this.payload.validity_disp =this.reviewDetailsIndia.validity;	
      this.payload.comments =this.reviewDetailsIndia.Comments;
      this.payload.authValue =this.reviewDetailsIndia.authValue;	

      //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.level1_japproval=this.countrydetails.level1_japproval;	
      this.payload.level2_japproval=this.countrydetails.level2_japproval;	
      this.payload.SLA_type=this.countrydetails.SLA_type;	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='fac_new';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.qag =this.countrydetails.qag ;	
      this.payload.class_of_serice =this.countrydetails.class_of_serice ;	
      this.payload.country_code = this.countrydetails.code ;	
      this.payload.default_call_permission=this.countrydetails.default_call_permission;
      
     // console.log('Payload');	
     // console.log(this.payload);	
     this.servicenowservice.submit_request_fac_new(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ queryParams: { country: this.pcode,service:this.service }}) ;	
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
          "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
          "step" : 3,	 
        }	
      ]	
    }
    
    this.reqFor = sessionStorage.getItem('radioAction')
    this.servicesData = servicesData.data[0];

    this.employeeInfo1 = sessionStorage.getItem('employeeInfo')	
    this.employeeInfo = JSON.parse(this.employeeInfo1);	
    if(this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null){
      this.hideProjectId = true;
      }

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