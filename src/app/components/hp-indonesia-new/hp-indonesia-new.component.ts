import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';	
import { CookieHandlerService } from '../../_services/cookie-handler.service';	
import { NgForm } from '@angular/forms';	
import {Router} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import { bpservices } from '../../_services/bp.service';
import { servicenowservice } from '../../_services/servicenow.service';	
import {fixedphone_new} from '../../../../config/payload';	
import {Location} from '@angular/common';	

@Component({
  selector: 'app-hp-indonesia-new',
  templateUrl: './hp-indonesia-new.component.html',
  styleUrls: ['./hp-indonesia-new.component.css']
})
export class HpIndonesiaNewComponent implements OnInit {

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
go = false;
goClick = true;
goResults:any;
empID:any='';
empIDEmail:any = '';
empIDValue:any = '';
changed:any;
gggg:any;
emailResult:any = false;
countryCode:any;
employeeID:any;
email:any;
emailClick = false;
locSelected : any


payload : fixedphone_new = new fixedphone_new();	

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

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location,private bpservices:bpservices) { }
  // Submit to Snow Jabber new code added by Swarnava ends	
   backClick(): void{	
    sessionStorage.setItem('backbutton','yes');	
    sessionStorage.setItem('step','step1');	
    //this.location.back();	
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
  
  }
  onEmpIDChange() {
    this.go = false;
    this.empIDChanged(this.empID);
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
      alert('Please provide the employee ID.');
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
      this.gggg = true;
      console.log(' BP Details', data.userdata);
      if (data.userdata) {
          this.email =  data.username.preferredidentity;
          this.go = true;
          this.goResults = true;
          this.emailClick = false;
      } else {
          this.go = false;
          this.goResults = false;
      }
    });
   return false;
  }
  }
  
  onEmailClick() {
    this.empIDEmail = this.employeeID+"--"+this.email;
    this.empID = this.empIDEmail;
    this.emailClick = true;
    this.emailResult = true;
  }
  
  classofservice(cos:string) {
    if(cos == 'international') {
      this.showBusinessNeed = false;
    } else {
      this.showBusinessNeed = true;
    }
  }
  
  entryDetails(formData: NgForm) {	
      
    if(formData.value.Location_1.toUpperCase() == 'SELECT LOCATION' || formData.value.Location_1 == '') {	
      alert('Please select the appropriate location.');	
      return;	
    }	
    
      if(formData.value.Device_Type == '') {
        alert('Please select the device type.');
        return;
      }
      if(formData.value.Model_Type == '') {
        alert('Please select the model type.');
        return;
      }
      if(this.goResults == false && formData.value.StepMentor != '' && this.gggg == true && this.showforFixedPhone == false) {
        alert('No match was found for the employee ID. Please provide the correct employee ID');
        this.empID = '';
        return;
      }
      if(formData.value.StepMentor == '' && this.showforFixedPhone == false && this.showforFixedPhone == false) {
        alert('Please provide the employee ID.');
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
        alert('MAC field value to be in combination of 0 to 9 and A to F');
        return
      }
  
    this.isEntryForm = true;	
    this.isReviewForm = false;	
  
    this.reviewDetailsIndia.officeLocation = formData.value.Location_1;	
    // this.reviewDetailsIndia.campus = formData.value.Buildings;	
    this.reviewDetailsIndia.device = formData.value.Device_Type;
    this.reviewDetailsIndia.model = formData.value.Model_Type;
    this.reviewDetailsIndia.employeeId = formData.value.StepMentor;
    this.reviewDetailsIndia.cos = formData.value.cos;
    this.reviewDetailsIndia.justification = formData.value.Justification;
    this.reviewDetailsIndia.description = formData.value.Description;
    this.reviewDetailsIndia.mac = formData.value.MACAddress;
  }	
  
  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;	
   // this.fixedPhoneIdentifier = false;	
  }	
    

  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;
      
      this.payload.Location_final =this.reviewDetailsIndia.officeLocation;
      this.payload.ReqNo=this.reqno;
      this.payload.Device_Type_Disp = this.reviewDetailsIndia.device;
      this.payload.Model_Disp =  this.reviewDetailsIndia.model;
      this.payload.MAC_Disp = this.reviewDetailsIndia.mac;
      this.payload.Desc_Disp = this.reviewDetailsIndia.description;
      this.payload.LocationCorrect = this.reviewDetailsIndia.officeLocation;
      this.payload.COS_Disp = this.reviewDetailsIndia.cos;
      this.payload.Justification_Disp = this.reviewDetailsIndia.justification;

      this.locSelected = this.reviewDetailsIndia.officeLocation;
      if(this.countrydetails.did_loc_formula){
        // Assign location value from cloudant. Needed for ITN allocation
        eval(this.countrydetails.did_loc_formula);
      } else {
       // Default -> EM and Conference - HP+location (logged off range) and Fixedphone - Location (user range)
        if (this.reviewDetailsIndia.device === 'Extension Mobility Station'){
          this.payload.DID_Location = 'HP' + this.locSelected	
        } else {
          this.payload.DID_Location = this.locSelected
        }
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
  this.fpModels = this.fpModels.split(',');
  this.cModels = sessionStorage.getItem('cmmodels')?.replace('"','');
  this.cModels = this.cModels.split(',');
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