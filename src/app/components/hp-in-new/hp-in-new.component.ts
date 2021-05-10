import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';	
import { CookieHandlerService } from '../../_services/cookie-handler.service';	
import { NgForm } from '@angular/forms';	
import {Router} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import { bpservices } from '../../_services/bp.service';
import { servicenowservice } from '../../_services/servicenow.service';	
import {fixedphone_new,Create_Cache_fixedphone} from '../../../../config/payload';	
import {Location} from '@angular/common';	

@Component({
  selector: 'app-hp-in-new',
  templateUrl: './hp-in-new.component.html',
  styleUrls: ['./hp-in-new.component.css']
})
export class HpInNewComponent implements OnInit {

  campA: any = [];	
  camp: any = [];	
  buildA: any = [];	
  build: any = [];	
  devices:any = [];
  j = 0;	
  countryname:any;	
ccode='';	
orgi:any;	
cnum : any;	
reqno:any;	
countrydetails : any;	
isButtonVisible = true;	
isSpinnerVisible= false; 	

isEntryForm = false;	
isReviewForm = true;	
Voice_Type = "No";	
hideDeptCode = true;	
hideBuilding = true;	
//fixedPhoneIdentifier = false;	
cloudantData: any = []	
servicesData: any = []	
Locations: any;	
locationlist: any;	
pcode: any;	
service: any;	
employeeInfo: any;	
employeeInfo1: any;	
campus:any;	
hideProjectId = false;
reqFor: any;
models:any = [];
emModels:any;
fpModels:any;
cModels:any;
hideDeviceSection = true;
showforAnyDevice = true;
showforFixedPhone = true;
showBusinessNeed = true;
voicemail = 'no';
COS = 'National';
selected_device:any = '';
modelValue:any;
empID:any='';
employeeID:any;
email:any;
go = false;
goClick = true;
goResults:any;
countryCode:any;
emailClick = false;
empIDEmail:any = '';
empIDValue:any = '';
changed:any;
gggg:any;
emailResult:any = false;
hideEmpID:any;
hideVoicemail:any;
errorinfo=false;
cache_tmp:  any = [];
selected_location:any = '';
chargeDeptValue:any = '';
projectIdValue:any = '';
accountIdValue:any = '';
icaValue:any = '';
MACValue:any = '';
descValue:any = '';
justificationValue:any = '';
cacheGoValue: any = false;
FixedPhoneData: any = [];
  
    
constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location,private bpservices:bpservices) { 	
 /* this.Locations = {	
    locc : ['Banglore~~MTP','Banglore~~SA',	
    'Gurgaon~~DLF Infinity','Gurgaon~~ASF','Hyderabad~~Hitech','Hyderabad~~Hitech2']	
    };	
  for(var i=0;i<this.Locations.locc.length;i++) {	
    var n=this.Locations.locc[i].indexOf("~")	
    this.campA[i] = this.Locations.locc[i].substr(0,n);	
    this.buildA[i] = this.Locations.locc[i].substr(n+2,this.Locations.locc[i].length);	
    }	
    for (var i=0;i<this.campA.length;i++) {	
    if(this.campA[i] !=this.campA[i+1]) {	
    this.camp[this.j] = this.campA[i];	
    this.j++;	
    }	
    }	*/
}	
// submit(){	
//   this.router.navigate(['/reviewdetails']) 	
// }	

// Submit to Fixed Phone New to Snow

payload : fixedphone_new = new fixedphone_new();	
cache : Create_Cache_fixedphone = new Create_Cache_fixedphone();
cache_disp : Create_Cache_fixedphone = new Create_Cache_fixedphone();

reviewDetailsIndia = {	

  officeLocation:	"",	
  campus:	"",	
  funded:	"No",	
  chargeDepartmentCode:	"NA",	
  businessUnit:	"",	
  projectId: "",	
  accountId: " ",	
  Voice_Type_Disp : "",	
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
  justification:"NA",
  description:"",
  mac:"",
}	
// Submit to Snow Jabber new code added by Swarnava ends	
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
selectedLocation(loc:String) {	
  this.build = [];	
  this.campus = '';	
  if(loc != '') {	
    this.hideBuilding = false;	
    var k =0;	
    for(var i=0;i<this.campA.length;i++) {	
    if(loc == this.campA[i]) {        	
    this.build[k] = this.buildA[i];
    k = k+1;	
    }	
    }
           
  } else {	
    this.hideBuilding = true;	
    this.build = [];	
  }	
}	

showChargeDepartmentCode() {	
  this.hideDeptCode = false;	
}	

hideChargeDepartmentCode() {	
  this.hideDeptCode = true;	
}	

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
    if(this.COS == 'International') {
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
onEmpIDChange() {
  this.go = false;
  this.empIDChanged(this.empID);
  this.getFixedPhoneData();
}
empIDChanged(id:any) {
  if(this.empIDValue != id) {
    this.empIDValue = id;
    this.changed = true;
    this.gggg = false;
  } else {
    this.changed = false;
    this.gggg = true;
  }
}
fetchEmployee() {
  if(this.empID == '') {
    alert('Please enter the Employee ID');
    return false;
  } else if(this.empID.length != 6) {
    alert('Please enter 6 digit Employee ID');
    return false;
  }
  else {
  this.countryCode = sessionStorage.getItem('countryroute');
  this.employeeID = this.empID.concat(this.countryCode);
  this.bpservices.bpdetails(this.employeeID).subscribe(data => {
    this.goClick = false;
    this.cacheGoValue = true;
    this.gggg = true;
    console.log(' BP Details', data.userdata);
    if (data.userdata) {
        this.email =  data.username.preferredidentity;
        this.go = true;
        this.goResults = true;
        this.emailClick = false;
        this.emailResult = false;
    } else {
        this.go = false;
        this.goResults = false;
    }
  });
  this.getFixedPhoneData();
 return false;
}
}

onEmailClick() {
  this.empIDEmail = this.employeeID+"--"+this.email;
  this.empID = this.empIDEmail;
  this.emailClick = true;
  this.emailResult = true;
  this.getFixedPhoneData();
}

classofservice(cos:string) {
  if(cos == 'International') {
    this.showBusinessNeed = false;
  } else {
    this.showBusinessNeed = true;
  }
  this.getFixedPhoneData();
}

getFixedPhoneData(){
  this.FixedPhoneData = {
    "goClick": this.goClick,
    "emailClick": this.emailClick,
    "emailResult": this.emailResult,
    "showBusinessNeed": this.showBusinessNeed,
    "COS": this.COS,
    "empID": this.empID,
    "employeeID": this.employeeID
  }
}

entryDetails(formData: NgForm) {	
    
  if(formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {	
    alert('Please select a location');	
    return;	
  }	
  if(formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '' || formData.value.Location_1.toUpperCase() != 'SELECT OFFICE LOCATION' && formData.value.Buildings == '') {	
    alert('Please select the Campus');	
    return;	
  }	
  if((formData.value.Department_number.toUpperCase() == '' || formData.value.Department_number.trim() == '') && this.hideDeptCode == false) {	
    alert('Please enter the Charge Department Code');	
    return;	
  }	
  if(formData.value.Projectid.trim() == '' && this.hideProjectId == false) {
    alert('Please enter the Project ID');
    return;
    }
    if(formData.value.Accountid.trim() == '') {
      alert('Please provide Account ID');
      return;
    }
    if(formData.value.ICAcode.trim() == '') {
      alert('Please provide ICA code');
      return;
    }
    if(formData.value.Device_Type == '') {
      alert('Please select a device type');
      return;
    }
    if(formData.value.Model_Type == '') {
      alert('Please select a type of model');
      return;
    }
    if(this.goResults == false && formData.value.StepMentor != '' && this.gggg == true && this.showforFixedPhone == false) {
      alert('No match was found for the employee ID. Please provide the correct employee ID');
      this.empID = '';
      return;
    }
    if(formData.value.StepMentor == '' && this.showforFixedPhone == false && this.showforFixedPhone == false) {
      alert('Please enter the employee ID');
      return;
    }
    if(formData.value.StepMentor.length != 6 && this.empIDEmail == '' && this.goClick == true &&this.showforFixedPhone == false) {
      alert('Please enter 6 digit Employee ID');
      return;
    }
    if(this.go == false && this.changed == true && this.showforFixedPhone == false) {
      alert('Please click Go to fetch employee details');
      return;
    }
    if(this.emailClick == false && this.showforFixedPhone == false) {
      alert('Please click search result to fetch Employee details');
      return;
    }
    if(formData.value.Justification.trim() == '' && this.showBusinessNeed == false) {
      alert('Please enter the business need for Class of Service.');
      return;
    }
    if(formData.value.Description.trim() == '') {
      alert('Please Enter a description and it should not be more than 30 characters');
      return;
    }
    if(formData.value.MACAddress == '' || formData.value.MACAddress.length != 12) {
      alert('Please enter 12 characters MAC address');
      return;
    }
    var pat1 = /[&\/\\#+()$~%.'":;*? !~`@<>{}g-zG-Z]/g;
    if(pat1.test(formData.value.MACAddress)) {
      alert('MAC field value to be in combination of 0 to 9 and A to F');
      return
    }

  this.isEntryForm = true;	
  this.isReviewForm = false;	

  this.reviewDetailsIndia.officeLocation = formData.value.Location_1;	
  this.reviewDetailsIndia.campus = formData.value.Buildings;
  this.reviewDetailsIndia.funded = this.Voice_Type;	
  this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;	
  this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;	
  this.reviewDetailsIndia.projectId = formData.value.Projectid;	
  this.reviewDetailsIndia.accountId = formData.value.Accountid;
  this.reviewDetailsIndia.icaCode = formData.value.ICAcode;
  this.reviewDetailsIndia.device = formData.value.Device_Type;
  this.reviewDetailsIndia.model = formData.value.Model_Type;
  this.reviewDetailsIndia.employeeId = this.employeeID;
  this.reviewDetailsIndia.voicemail = formData.value.Voicemail;
  this.reviewDetailsIndia.justification = formData.value.Justification;
  this.reviewDetailsIndia.description = formData.value.Description;
  this.reviewDetailsIndia.mac = formData.value.MACAddress;
  if(formData.value.Device_Type !== 'Fixed Phone User') {
    this.reviewDetailsIndia.cos = "";
  } else {
    this.reviewDetailsIndia.cos = formData.value.cos;
  }
  this.create_cache(formData);
}	

create_cache(formData:NgForm){

  console.log("Starting Cache");
  this.cache.setflag=true;
  this.cache.cnum=this.cnum;
  this.cache.officeLocation = formData.value.Location_1;	
  this.cache.campus = formData.value.Buildings;
  this.cache.funded = this.Voice_Type;	
  this.cache.chargeDepartmentCode = formData.value.Department_number;	
  this.cache.projectId = formData.value.Projectid;	
  this.cache.accountId = formData.value.Accountid;
  this.cache.icaCode = formData.value.ICAcode;
  this.cache.device = formData.value.Device_Type;
  this.cache.model = formData.value.Model_Type;
  this.cache.employeeId = this.empID;
  this.cache.voicemail = formData.value.Voicemail;
  this.cache.justification = formData.value.Justification;
  this.cache.description = formData.value.Description;
  this.cache.mac = formData.value.MACAddress;
  this.cache.goClick = this.goClick;
  this.cache.emailClick = this.emailClick;
  this.cache.emailResult = this.emailResult;
  this.cache.showBusinessNeed = this.showBusinessNeed;
  this.cache.cos = this.COS;
  this.cache.employeeIDDisplay = this.employeeID;
  sessionStorage.setItem('cache',JSON.stringify(this.cache));
  console.log("cached");
}

BackButton() {	
  this.isEntryForm = false;	
  this.isReviewForm = true;	
 // this.fixedPhoneIdentifier = false;	
}	

 // Submit to Snow Jabber new code added by Swarnava	
submit_snow(){	
  this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
  sessionStorage.setItem('reqno',this.reqno)	
  this.isButtonVisible=false;	
  this.isSpinnerVisible=true;	
    this.payload.orinator_payload=this.orgi;	
    this.payload.cNum_payload=this.cnum;	
    // fields picked up from form -- begins	
    this.payload.Buildings_Disp=this.reviewDetailsIndia.campus;	
    // by default set to true. below line can be removed if needed.	
    this.payload.Voice_Type_Disp = 	this.reviewDetailsIndia.funded;
    this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;	
    this.payload.icano_Disp = this.reviewDetailsIndia.icaCode;	
    this.payload.BusinessUnit_Disp =this.reviewDetailsIndia.businessUnit;	
    this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;	
    this.payload.Location_final =this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;	
    this.payload.accid_Disp=this.reviewDetailsIndia.accountId;	
    this.payload.ReqNo=this.reqno;
    this.payload.Device_Type_Disp = this.reviewDetailsIndia.device;
    this.payload.Model_Disp =  this.reviewDetailsIndia.model;
    this.payload.MAC_Disp = this.reviewDetailsIndia.mac;
    this.payload.Voicemail_Disp = this.reviewDetailsIndia.voicemail;
    this.payload.Desc_Disp = this.reviewDetailsIndia.description;
    this.payload.LocationCorrect = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
    this.payload.LocationCorrectnew = "HP"+this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
    this.payload.COS_Disp = this.reviewDetailsIndia.cos;
    this.payload.Justification_Disp = this.reviewDetailsIndia.justification;	

    // fields to be picked up from form -- ends	
    this.payload.level1_japproval=this.countrydetails.level1_japproval;	
    this.payload.level2_japproval=this.countrydetails.level2_japproval;	
    this.payload.SLA_type=this.countrydetails.SLA_type;	
    this.payload.gvs_approval_link="";
    this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
    this.payload.countryname=this.countrydetails.name;	
    this.payload.request_type='fixedphone_new';	
    this.payload.evolution_instance=this.countrydetails.evolution_instance ;
    this.payload.country_code = this.countrydetails.code;
    
   // console.log('Payload');	
   // console.log(this.payload);	
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
 
// Submit to Snow Jabber new code added by Swarnava ends	

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

  //load cache data for entry details form. -- START
  this.cache_tmp=sessionStorage.getItem('cache')	
  console.log(this.cache_tmp);
  this.cache_disp=JSON.parse(this.cache_tmp);
  if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='fixedphone_new')){
    this.selected_location=String(this.cache_disp.officeLocation) ;
    this.selectedLocation(this.cache_disp.officeLocation);
    if((this.cache_disp.officeLocation.toUpperCase()== 'SELECT OFFICE LOCATION') || (this.cache_disp.officeLocation=='') )
    this.hideBuilding=true;
    else
    this.hideBuilding=false;
    this.campus = String(this.cache_disp.campus);	
    this.Voice_Type= String(this.cache_disp.funded);
    this.projectIdValue = String(this.cache_disp.projectId);
    this.accountIdValue = String(this.cache_disp.accountId);
    this.icaValue = String(this.cache_disp.icaCode);
    this.selected_device = this.cache_disp.device;
    this.selectedDevice(this.selected_device);
    if(this.cache_disp.employeeId != undefined)
    this.empID = String(this.cache_disp.employeeId);
    this.voicemail = String(this.cache_disp.voicemail);
    if(this.cache_disp.cos != undefined){
    this.COS = String(this.cache_disp.cos);
    this.classofservice(this.COS);
    }
    this.MACValue = String(this.cache_disp.mac);
    this.descValue = String(this.cache_disp.description);
    this.justificationValue = String(this.cache_disp.justification);
    this.modelValue = this.cache_disp.model;
    if(this.cache_disp.employeeIDDisplay == undefined){
      this.employeeID = '';
    } else {
      this.employeeID = String(this.cache_disp.employeeIDDisplay);
    }
    //this.employeeID = String(this.cache_disp.employeeIDDisplay);
    

    // this.hideDeviceSection = Boolean(this.cache.hideDeviceSection)
    // this.showforAnyDevice = Boolean(this.cache.showforAnyDevice);
    // this.showforFixedPhone =Boolean(this.cache.showforFixedPhone);
    this.goClick = this.cache_disp.goClick;
    this.emailClick = this.cache_disp.emailClick;
    this.emailResult = this.cache_disp.emailResult;
    this.cacheGoValue = false;
    this.showBusinessNeed = this.cache_disp.showBusinessNeed;
    if(this.cache_disp.funded=='Yes'){
     // this.chargeDeptValue=  this.cache_disp.chargeDepartmentCode;
      this.showChargeDepartmentCode();
    }
    else{
      //this.chargeDeptValue= '';
      this.hideChargeDepartmentCode();
    }
      this.chargeDeptValue=  this.cache_disp.chargeDepartmentCode;
     
      console.log("cache restored");
  }else{
    sessionStorage.removeItem('cache');
  }

  //load cache data for entry details form. -- END
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
