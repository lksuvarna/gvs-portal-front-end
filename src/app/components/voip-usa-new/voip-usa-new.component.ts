import { Component, OnInit } from '@angular/core';	
import { cloudantservice } from '../../_services/cloudant.service';	
import { CookieHandlerService } from '../../_services/cookie-handler.service';	
import { NgForm } from '@angular/forms';	
import {Router} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Jabber_New} from '../../../../config/payload';	
import { analyzeAndValidateNgModules } from '@angular/compiler';	
import {Location} from '@angular/common';	

@Component({
  selector: 'app-voip-usa-new',
  templateUrl: './voip-usa-new.component.html',
  styleUrls: ['./voip-usa-new.component.css']
})
export class VoipUsaNewComponent implements OnInit {

  
  campA: any = [];	
  camp: any = [];	
  buildA: any = [];	
  build: any = [];	
  j = 0;	
  msgdis=true;
  countryname:any;	
  fl_location:any;
ccode='';	
orgi:any;	
cnum : any;	
reqno:any;	
countrydetails : any;	
isButtonVisible = true;	
isSpinnerVisible= false; 	
errorinfo=false;
isEntryForm = false;	
isReviewForm = true;	
Voice_Type = "No";	
 countrycodes:any; 
    
hideDeptCode = true;	
hideBuilding = true;	
fixedPhoneIdentifier = false;	
cloudantData: any = []	
servicesData: any = []	
countrycodesarray: any = []	
Locations: any;	
locationlist: any;	
pcode: any;	
service: any;	
//min = 1000;	
//max = 9000;	
employeeInfo: any;	
employeeInfo1: any;	
campus:any;	
hideProjectId = false;
reqFor: any;
belongsTo:any;
  //locations:any[] = ["Select Office Location","Home and Mobile","AZ-Phoenix","AZ-Tucson","CA-Costa Mesa-Anton Blvd"];

  hideSteps = false;
 
  locationselected = "Home and Mobile";
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
  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.Buildings_Disp=this.reviewDetailsIndia.officeLocation;	
      // by default set to true. below line can be removed if needed.	
      //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
      this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;	
     // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
      this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;	
      this.payload.BusinessUnit_Disp =this.reviewDetailsIndia.businessUnit;	
      this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;	
      this.payload.Location_final =this.reviewDetailsIndia.officeLocation;	
      //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
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
    }
     );	
     }	
  
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
   }

  entryDetailsUSA(formData: NgForm) {	

    this.isEntryForm = true;	
    this.isReviewForm = false;	
  
    this.reviewDetailsIndia.officeLocation = this.locationselected;	
  }

  onLocationSelect(e:any){
    let index:number = e.target["selectedIndex"] ;
    
    if(this.countrycodes[index] !== this.employeeInfo.workloc && e.target.value !== "Home and Mobile") {	
      
      alert('The serial number that you have entered does not belong to the selected location. Please choose your correct location or choose Home and Mobile location.');	
      e.target.value = "Home and Mobile";
      this.locationselected="Home and Mobile";
      this.msgdis=true
    }  else {
      this.belongsTo = this.locationselected;
    }
   
    
 }
 onLocSelect(){
  
   let n:number=this.countrycodes.indexOf(this.employeeInfo.workloc)
  
   if (n==-1){
    this.msgdis=true
this.locationselected= "Home and Mobile";
this.msgdis=true

   }
   else{
     
     this.locationselected=this.locationlist[n]}
     this.msgdis=false
     
 }

 constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { 	}
 payload : Jabber_New = new Jabber_New();	
  
 reviewDetailsIndia = {	
 
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
  
 ngOnInit(): void {	
  
  
 this.orgi=this.cookie.getCookie('ccode');	
 this.cnum = sessionStorage.getItem('cnum') ;	
 this.countrydetails = sessionStorage.getItem('countrydetails');
 this.countrycodes	=sessionStorage.getItem('ccodes');
 this.countrydetails = JSON.parse(this.countrydetails);	
 this.countrycodes=this.countrycodes?.split(',');	
 this.employeeInfo1=sessionStorage.getItem('employeeInfo')
 this.employeeInfo=JSON.parse(this.employeeInfo1)	
    
 this.ccode=this.cookie.getCookie('ccode').substring(6,9);	
 this.route.queryParams	
 .subscribe(params => {	
   console.log(params);	
   this.service=params.service;	
   this.pcode = params.country;	
   console.log("navigation component" + this.pcode);
   

 this.locationlist=sessionStorage.getItem('locationdetails')?.replace('"','')	
 this.locationlist=this.locationlist?.replace('"','').split(',');	
 this.msgdis=true;
 this.onLocSelect()	;
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
         
       "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
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
  })	
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