import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';	
import { servicenowservice } from '../../_services/servicenow.service';	
import { bpservices } from '../../_services/bp.service';
import {Location} from '@angular/common';	
import {fixedphone_new,Create_Cache_fixedphone} from '../../../../config/payload';	


@Component({
  selector: 'app-hp-usa-new',
  templateUrl: './hp-usa-new.component.html',
  styleUrls: ['./hp-usa-new.component.css']
})
export class HpUsaNewComponent implements OnInit {

cloudantData: any = []	
servicesData: any = []	
isEntryForm = false;	
isReviewForm = true;	
showBusinessNeed = true;
Voice_Type = "No";	
employeeInfo: any;	
models:any = [];
modelValue:any;
hideDeviceSection = true;
showforAnyDevice = true;
showforFixedPhone = true;
fpModels:any;
hideEmpID:any;
hideVoicemail:any;
errorinfo=false;
COS = 'national';
emModels:any;
cModels:any;
orgi:any;	
cnum : any;	
reqno:any;	
countrydetails : any;	
isButtonVisible = true;	
isSpinnerVisible= false; 		
pcode: any;	
ccode='';	
devices:any = ['Extension Mobility Station','Conference / Meeting Room Phone','Fixed Phone User'];
service: any;	
reqFor: any;
employeeInfo1: any;	
hideProjectId = false;
locationlist: any;	
selected_device:any = '';
voicemail = 'no';

FixedPhoneData: any = [];
cache_tmp:  any = [];
selected_location:any = '';
hideBuilding = true;	
MACValue:any = '';
descValue:any = '';
justificationValue:any = '';
cacheGoValue: any = false;
locSelected : any

payload : fixedphone_new = new fixedphone_new();	
cache : Create_Cache_fixedphone = new Create_Cache_fixedphone();
cache_disp : Create_Cache_fixedphone = new Create_Cache_fixedphone();

reviewDetailsIndia = {	

  officeLocation:	"",	
  campus:	"",	
  funded:	"",	
  chargeDepartmentCode:	"",	
  businessUnit:	"",	
  projectId: "",	
  accountId: " ",	
  Voice_Type_Disp : true,	
  icano_Disp : "",	
  Location_final :"",	
  accid_Disp: "",	
  reqno:"",
  icaCode:"",
  device:"",
  model:"",
  employeeId:"",
  voicemail:"",
  cos:"",
  justification:"",
  description:"",
  mac:"",
}	


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
}	}

selectedDevice(device:string) {
  this.models = [];
  this.modelValue = '';
  if(device != ''){
    this.hideDeviceSection = false;
  }
  if(device == ''){
    this.hideDeviceSection = true;
  }
  if(device.toUpperCase() == 'FIXED PHONE USER') {
    this.showforAnyDevice = false;
    this.showforFixedPhone = false;
    this.models = [...this.fpModels];
    this.hideEmpID = false;
    this.hideVoicemail = false;
    if(this.COS == 'international') {
      this.showBusinessNeed = false;
    }
  }
  if(device.toUpperCase() == 'EXTENSION MOBILITY STATION') {
    this.showforAnyDevice = false;
    this.showforFixedPhone = true;
    this.models = [...this.emModels];
    this.hideEmpID = true;
    this.hideVoicemail = true;
    this.showBusinessNeed = true;
  }
  if(device.toUpperCase() == 'CONFERENCE / MEETING ROOM PHONE') {
    this.showforAnyDevice = false;
    this.showforFixedPhone = true;
    this.models = [...this.cModels];
    this.hideEmpID = true;
    this.hideVoicemail = true;
    this.showBusinessNeed = true;
  }
  this.getFixedPhoneData();

}


classofservice(cos:string) {
  if(cos == 'international') {
    this.showBusinessNeed = false;
  } else {
    this.showBusinessNeed = true;
  }
  this.getFixedPhoneData();

}


getFixedPhoneData(){
  this.FixedPhoneData = {
    "showBusinessNeed": this.showBusinessNeed,
    "COS": this.COS,
    
  }
}

  entryDetails(formData: NgForm) {	
    
    if(formData.value.Location_1.toUpperCase() == 'SELECT ONE' || formData.value.Location_1 == '') {	
      alert('Please select the appropriate location.');	
      return;	
    }	
    // if(formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '' || formData.value.Location_1.toUpperCase() != 'SELECT OFFICE LOCATION' && formData.value.Buildings == '') {	
    //   alert('Please select the Campus');	
    //   return;	
    // }	

    if(formData.value.Device_Type == '') {
        alert('Please select the device type.');
        return;
      }
      if(formData.value.Model_Type == '') {
        alert('Please select the model type.');
        return;
      }
      
      if(formData.value.Justification == '' && this.showBusinessNeed == false) {
        alert('Please provide a business justification for the selected class of service.');
        return;
      }
      if(formData.value.Description == '') {
        alert('Please provide a description (30 character limit).');
        return;
      }
      if(formData.value.MACAddress == '' || formData.value.MACAddress.length != 12) {
        alert('Please provide the MAC address (12 character limit).');
        return;
      }
      var pat1 = /[&\/\\#+()$~%.'":;*? !~`@<>{}g-zG-Z]/g;
      if(pat1.test(formData.value.MACAddress)) {
        alert('Please provide MAC address in a combination of 0 to 9 and A to F');
        return
      }
  
    this.isEntryForm = true;	
    this.isReviewForm = false;	
  
    this.reviewDetailsIndia.officeLocation = formData.value.Location_1;	
    this.reviewDetailsIndia.campus = formData.value.Buildings;	
    //this.reviewDetailsIndia.funded = this.Voice_Type;	
    this.reviewDetailsIndia.device = formData.value.Device_Type;
    this.reviewDetailsIndia.model = formData.value.Model_Type;
    // this.reviewDetailsIndia.employeeId = formData.value.StepMentor;
    this.reviewDetailsIndia.voicemail = formData.value.Voicemail;
    this.reviewDetailsIndia.cos = formData.value.cos;
    this.reviewDetailsIndia.justification = formData.value.Justification;
    this.reviewDetailsIndia.description = formData.value.Description;
    this.reviewDetailsIndia.mac = formData.value.MACAddress;
  this.create_cache(formData);

  }	

  create_cache(formData:NgForm){

    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.officeLocation = formData.value.Location_1;	
    this.cache.campus = formData.value.Buildings;
    //this.cache.funded = this.Voice_Type;	
    //this.cache.chargeDepartmentCode = formData.value.Department_number;	
    //this.cache.projectId = formData.value.Projectid;	
    // this.cache.accountId = formData.value.Accountid;
    // this.cache.icaCode = formData.value.ICAcode;
    this.cache.device = formData.value.Device_Type;
    this.cache.model = formData.value.Model_Type;
    // this.cache.employeeId = this.empID;
    this.cache.voicemail = formData.value.Voicemail;
    this.cache.justification = formData.value.Justification;
    this.cache.description = formData.value.Description;
    this.cache.mac = formData.value.MACAddress;
    // this.cache.goClick = this.goClick;
    // this.cache.emailClick = this.emailClick;
    // this.cache.emailResult = this.emailResult;
    this.cache.showBusinessNeed = this.showBusinessNeed;
    this.cache.cos = this.COS;
    // this.cache.employeeIDDisplay = this.employeeID;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
  }

  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;	
   // this.fixedPhoneIdentifier = false;	
  }	

  // selectedLocation(loc:String) {	
  //   this.build = [];	
  //   this.campus = '';	
  //   if(loc != '') {	
  //     this.hideBuilding = false;	
  //     var k =0;	
  //     for(var i=0;i<this.campA.length;i++) {	
  //     if(loc == this.campA[i]) {        	
  //     this.build[k] = this.buildA[i];
  //     k = k+1;	
  //     }	
  //     }
             
  //   } else {	
  //     this.hideBuilding = true;	
  //     this.build = [];	
  //   }	
  // }	
  
 constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location,private bpservices:bpservices) { }

submit_snow(){	
  this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
  sessionStorage.setItem('reqno',this.reqno)	
  this.isButtonVisible=false;	
  this.isSpinnerVisible=true;	
    this.payload.orinator_payload=this.orgi;	
    this.payload.cNum_payload=this.cnum;
    
    this.payload.Location_final =this.reviewDetailsIndia.officeLocation
    this.payload.ReqNo=this.reqno;
    this.payload.Device_Type_Disp = this.reviewDetailsIndia.device;
    this.payload.Model_Disp =  this.reviewDetailsIndia.model;
    this.payload.MAC_Disp = this.reviewDetailsIndia.mac;
    this.payload.Voicemail_Disp = this.reviewDetailsIndia.voicemail;
    this.payload.Desc_Disp = this.reviewDetailsIndia.description;
    this.payload.Location_final = this.reviewDetailsIndia.officeLocation
    this.payload.COS_Disp = this.reviewDetailsIndia.cos;
    this.payload.Justification_Disp = this.reviewDetailsIndia.justification;

    this.locSelected = this.reviewDetailsIndia.officeLocation
    if(this.countrydetails.did_loc_formula){
      // Assign location value from cloudant. Needed for ITN allocation
      eval(this.countrydetails.did_loc_formula);
    } else {
     // Default -> EM and Conference - HP+location (logged off range) and Fixedphone - Location (user range)
      this.payload.DID_Location = "HP"+this.reviewDetailsIndia.officeLocation
    }

    this.payload.level1_japproval=this.countrydetails.level1_japproval;	
    this.payload.level2_japproval=this.countrydetails.level2_japproval;	
    this.payload.SLA_type=this.countrydetails.SLA_type;	
    
    this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
    this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
    this.payload.countryname=this.countrydetails.name;	
    this.payload.request_type='fixedphone_new';	
    this.payload.evolution_instance=this.countrydetails.evolution_instance ;
    this.payload.country_code = this.countrydetails.code;

    this.servicenowservice.submit_request_fixed_new(this.payload).subscribe(data=> {	
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

  this.devices = sessionStorage.getItem('fdevices')?.replace('"','');
  this.devices = this.devices.replace('"','').split(',');
  this.emModels = sessionStorage.getItem('emmodels')?.replace('"','');
  this.emModels = this.emModels.replace('"','').split(',');
  this.fpModels = sessionStorage.getItem('fpmodels')?.replace('"','');
  this.fpModels = this.fpModels.replace('"','').split(',');
  this.cModels = sessionStorage.getItem('cmmodels')?.replace('"','');
  this.cModels = this.cModels.replace('"','').split(',');
  this.locationlist=sessionStorage.getItem('locationdetails')?.replace('"','')	
  this.locationlist=this.locationlist?.replace('"','').split(',');

  

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
  if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='fixedphone_new')){
    this.selected_location=String(this.cache_disp.officeLocation) ;
    //this.selectedLocation(this.cache_disp.officeLocation);
    // if((this.cache_disp.officeLocation.toUpperCase()== 'SELECT OFFICE LOCATION') || (this.cache_disp.officeLocation=='') )
    // this.hideBuilding=true;
    // else
    // this.hideBuilding=false;
    //this.campus = String(this.cache_disp.campus);	
    //this.Voice_Type= String(this.cache_disp.funded);
    //this.projectIdValue = String(this.cache_disp.projectId);
    this.selected_device = this.cache_disp.device;
    this.selectedDevice(this.selected_device);
    this.voicemail = String(this.cache_disp.voicemail);
    if(this.cache_disp.cos != undefined){
    this.COS = String(this.cache_disp.cos);
    this.classofservice(this.COS);
    }
    this.MACValue = String(this.cache_disp.mac);
    this.descValue = String(this.cache_disp.description);
    this.justificationValue = String(this.cache_disp.justification);
    this.modelValue = this.cache_disp.model;
    this.cacheGoValue = false;
    this.showBusinessNeed = this.cache_disp.showBusinessNeed;
  }else{
    sessionStorage.removeItem('cache');
  }
  

    


  }

  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
   // this.fixedPhoneIdentifier = false;	
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