import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Create_Cache_jabber,Create_Cache_fixedphone,Create_Cache_fac, Create_Cache_mobile } from 'config/payload';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  isWarning = false
  isWarning1 = false
  isWarning2 = false
  isWarning3 = false

  @Input('cnum') cnum : any;
  @Input('locationselected') locationselected : any;
  @Input('FixedPhoneData') FixedPhoneData : any;
  @Input('formData') formData !:NgForm;
  @Input('UpdatedFor') UpdatedFor : any;
  @Input ('step') step : any;
  @Input ('isSelf') isSelf : any;
  @Input('hideSteps') set onChange (isWarning: any) {
    this.isWarning = isWarning
  
    if (this.step === 1 ){
      if(isWarning === true){
            this.isWarning1 = true
            this.isWarning2 = true
            this.isWarning3 = true
           } else {
            this.isWarning1 = false
            this.isWarning2 = false
            this.isWarning3 = false
           }
        }
        if (this.service == 'fixedphone_update' || this.service == 'fixedphone_delete') {
            if (this.step === 2 && this.isSelf ===true && this.isWarning === true){
              this.isWarning2 = true
            } else {
              this.isWarning2 = false
            }
            if (this.step === 3 && this.isSelf === false && this.isWarning === true){  
              this.isWarning3 = true
            } else {
              this.isWarning3 = false
            } 
        }
    
        if ((this.service =='specialrequest') && (this.step != 1)) {
          if (this.step === 2 && this.isSelf ===true && this.isWarning === true){
            this.isWarning2 = true
          } else {
            this.isWarning2 = false
          }
          if (this.step === 3 && this.isSelf ===false && this.isWarning === true){  
            this.isWarning3 = true
          } else {
            this.isWarning3 = false
          } 
      }
  }
  

  @Output() previousStep = new EventEmitter<string>()

  reqFor : any
  servicesData : any = []
  pcode = '';
  service :any;
  isDisabled = false
  tooltip : any
  noTooltip : any
  changeClass1 = false
  changeClass2 = false
  changeClass3 = false
  changeClass4 = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.pcode = params.country;
      this.service=params.service;
      console.log("navigation component" + this.pcode);
    })
    
  const servicesData = { 
    "data": [
      {    
        "steps": [
          {"name" : "STEP 1","tooltip" : "Employee Search"},            
          {"name" : "STEP 2","tooltip" : "Employee Information"},
          {"name" : "STEP 2","tooltip" : "Employee Entry Details"},
          {"name" : "STEP 3","tooltip" : "Employee Entry Details"},
          {"name" : "STEP 3","tooltip" : "Review Details"},
          {"name" : "STEP 4","tooltip" : "Review Details"},
          {"name" : "STEP 2","tooltip" : "Employee Resources Details"},
          {"name" : "STEP 3","tooltip" : "Employee Resources Details"},
          {"name" : "STEP 2","tooltip" : "Employee Requests Details"},
          {"name" : "STEP 3","tooltip" : "Employee Requests Details"},
          {"name" : "STEP 1","tooltip" : "Phone Number Search"},
          {"name" : "STEP 2","tooltip" : "Phone Number Details"},
        ]  
      }
    ]
  }

  this.servicesData = servicesData.data[0].steps

  if (!(this.step === 1)){
    if(this.isSelf === 'myself'){
      this.isSelf = true
    } else{
      this.isSelf = false
    }
  }

  if (this.step === 2 && this.isWarning === true){
    this.isWarning2 = true
    this.isWarning3 = true
    this.isWarning1 = false
   }

   if (this.step === 3 && this.isWarning === true){
    this.isWarning3 = true
    this.isWarning1 = false
   }

   if(this.service !== 'jabber_new' && this.service !== 'specialrequest' && this.step === 3 && this.isWarning === true){
    this.isWarning2 = true
    this.isWarning3 = true
    this.isWarning1 = false
   }

   if(this.isSelf === true && this.service == 'specialrequest' && this.step === 3 && this.isWarning === true){
    this.isWarning2 = true
    this.isWarning3 = true
    this.isWarning1 = false
   }

  if (this.step === 3 && this.isSelf === true){
    this.step = 2
  }

  if (this.step === 4  && this.isSelf === true){
    this.step = 3
  }

  }
  sendToEntryDetails () {
    this.previousStep.emit('true')
  }

  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_fixed : Create_Cache_fixedphone = new Create_Cache_fixedphone();
  cache_fac : Create_Cache_fac = new Create_Cache_fac();
  cache_mobile : Create_Cache_mobile = new Create_Cache_mobile();

  cache_data(){

  if(this.service=='jabber_new'){
    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    if((this.formData.value.Location!=undefined)){
    if(this.locationselected!=undefined)
    this.cache.officeLocation = this.locationselected;		
    else
    this.cache.officeLocation = this.formData.value.Location;		

    }
    else
    this.cache.officeLocation = this.formData.value.Location_1;	
    this.cache.campus = this.formData.value.Buildings;		
    this.cache.funded = this.formData.value.Voice_Type;
    this.cache.chargeDepartmentCode=this.formData.value.Department_number;	
    this.cache.projectId=this.formData.value.Projectid;	
    this.cache.fixPhoneIdentifier=this.formData.value.identifier_hp;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");

  }

  if(this.service=='jabber_delete'){
    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.selected_jabber =this.formData.value.Jabber_1;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached"+JSON.stringify(this.cache));

  }

  if(this.service=='jabber_update'){
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.selected_jabber = this.formData.value.Jabber_1;
    if(this.formData.value.account_id==undefined)
    this.cache.projectId=this.formData.value.Charge_Dept;
    else			
    this.cache.projectId=this.formData.value.account_id;
    this.cache.update_vm=this.formData.value.checked;
    this.cache.update_cos=this.formData.value.checked2;
    this.cache.voicemail=this.formData.value.Voice_Mail;
    this.cache.cos=this.formData.value.select_cos;
    this.cache.businessjustification=this.formData.value.businessjustification;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached"+JSON.stringify(this.cache));

  }

  if(this.service=='jabber_move'){
    sessionStorage.setItem('step','step1');	
    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.selected_jabber = this.formData.value.Identifier_Selected;	
    if(this.cache.selected_jabber==''){
    this.cache.officeLocation ='';
    this.cache.funded ="No";
    }
    else{
    if(this.formData.value.Location_1!=undefined)
    this.cache.officeLocation = this.formData.value.Location_1;
    else
    this.cache.officeLocation = this.formData.value.Location_Selected
    this.cache.funded = this.formData.value.Voice_Type;		
    }
    this.cache.campus = this.formData.value.Buildings;		
    
    this.cache.chargeDepartmentCode=this.formData.value.Department_number;	
    this.cache.projectId=this.formData.value.Projectid;	
    this.cache.fixPhoneIdentifier= this.formData.value.identifier_hp;
    this.cache.defaultLocation = this.formData.value.default_location;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
  }

  if(this.service=='specialrequest'){
    console.log("Starting special Request cache");
    this.cache.setflag=false;
    this.cache.cnum=this.cnum;
    if(this.formData.value.Jabber_1==undefined)
    this.cache.selected_jabber='';
    else
    this.cache.selected_jabber = this.formData.value.Jabber_1.trim();
    this.cache.officeLocation =  this.formData.value.Location
    this.cache.campus=this.formData.value.default_location;	
    this.cache.businessjustification= this.formData.value.requirement;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("special Request cached "+sessionStorage.getItem('cache'));
  }

  if(this.service == 'fixedphone_new') {
    console.log("Starting Cache");
  this.cache_fixed.setflag=true;
  this.cache_fixed.cnum=this.cnum;
  this.cache_fixed.officeLocation = this.formData.value.Location_1;	
  this.cache_fixed.campus = this.formData.value.Buildings;
  this.cache_fixed.funded = this.formData.value.Voice_Type;	
  this.cache_fixed.chargeDepartmentCode = this.formData.value.Department_number;	
  this.cache_fixed.projectId = this.formData.value.Projectid;	
  this.cache_fixed.accountId = this.formData.value.Accountid;
  this.cache_fixed.icaCode = this.formData.value.ICAcode;
  this.cache_fixed.device = this.formData.value.Device_Type;
  this.cache_fixed.model = this.formData.value.Model_Type;
  //this.cache_fixed.employeeId = this.FixedPhoneData.empID;
  this.cache_fixed.justification = this.formData.value.Justification;
  this.cache_fixed.description = this.formData.value.Description;
  this.cache_fixed.mac = this.formData.value.MACAddress;
  // this.cache_fixed.goClick = this.FixedPhoneData.goClick;
  // this.cache_fixed.emailClick = this.FixedPhoneData.emailClick;
  // this.cache_fixed.emailResult = this.FixedPhoneData.emailResult;
  this.cache_fixed.showBusinessNeed = this.FixedPhoneData.showBusinessNeed;
  this.cache_fixed.cos = this.FixedPhoneData.COS;
  if(this.FixedPhoneData.voicemail == undefined){
    this.cache_fixed.voicemail = this.formData.value.Voicemail;
  } else {
    this.cache_fixed.voicemail = this.FixedPhoneData.voicemail;
  }
  //this.cache_fixed.employeeIDDisplay = this.FixedPhoneData.employeeID;
  sessionStorage.setItem('cache',JSON.stringify(this.cache_fixed));
  console.log("cached");
  }

  if(this.service == 'fixedphone_delete') {
    console.log("Starting Cache");
  this.cache_fixed.setflag=true;
  this.cache_fixed.cnum=this.cnum;
  this.cache_fixed.currentMacOrPhone = this.formData.value.IdNum1;
  sessionStorage.setItem('cache',JSON.stringify(this.cache_fixed));
  console.log("cached");
  }

  if(this.service == 'fixedphone_update') {
    console.log("Starting Cache");
    this.cache_fixed.setflag = true;
    this.cache_fixed.cnum = this.cnum;
    this.cache_fixed.currentMacOrPhone = this.formData.value.IdNum1;
    this.cache_fixed.showSearch = this.FixedPhoneData.showSearch;
    this.cache_fixed.hideNextButton = this.FixedPhoneData.hideNextButton;
    this.cache_fixed.showerrormessage = this.FixedPhoneData.showerrormessage;
    this.cache_fixed.hideNext =  this.FixedPhoneData.hideNext;
    //this.cache_fixed.hideSteps = this.FixedPhoneData.hideSteps;
    this.cache_fixed.currentMac = this.FixedPhoneData.currentMac?.trim();
    this.cache_fixed.currentPhone = this.FixedPhoneData.currentPhone?.trim();
    this.cache_fixed.currentLocation = this.FixedPhoneData.currentloc?.trim();
    this.cache_fixed.currentDescription = this.FixedPhoneData.currentdesc?.trim();
    this.cache_fixed.currentmodel = this.FixedPhoneData.currentmodel?.trim();
    this.cache_fixed.updateRequired = this.formData.value.UpdateReq;
    this.cache_fixed.officeLocation = this.formData.value.Location_1_1;
    this.cache_fixed.campus = this.formData.value.Buildings;
    this.cache_fixed.newMac = this.formData.value.MAC1;
    this.cache_fixed.newModel = this.formData.value.NewModel;
    this.cache_fixed.description = this.formData.value.Newdesc;
    this.cache_fixed.justification = this.formData.value.Comments;
    sessionStorage.setItem('cache',JSON.stringify(this.cache_fixed));
    console.log("cached");
  }

if(this.service=='fac_new'){

  console.log("Starting cache_fac");
  this.cache_fac.setflag=true;
  this.cache_fac.cnum=this.cnum;
  this.cache_fac.officeLocation = this.formData.value.Location_1;	
  this.cache_fac.campus = this.formData.value.Buildings;		
  this.cache_fac.funded = this.formData.value.Voice_Type;
  this.cache_fac.chargeDepartmentCode=this.formData.value.chargeDepartmentCode;	
  this.cache_fac.authLevel=this.formData.value.authLevel;	
  this.cache_fac.Fac_Type= this.formData.value.Fac_Type;
  this.cache_fac.validity= this.formData.value.validity;
  this.cache_fac.Comments= this.formData.value.Comments;
  sessionStorage.setItem('cache',JSON.stringify(this.cache_fac));
  console.log("cached");

}

if(this.service=='fac_update'){
  console.log("Starting cache_fac");
  this.cache_fac.setflag=true;
  this.cache_fac.cnum=this.cnum;
  this.cache_fac.updatefor = this.UpdatedFor;
  this.cache_fac.officeLocation =  this.formData.value.Location_1;		
  this.cache_fac.campus = this.formData.value.Buildings;		
  this.cache_fac.funded = this.formData.value.Voice_Mail;
  this.cache_fac.chargeDepartmentCode=this.formData.value.chargeDepartmentCode;	
  this.cache_fac.authLevel=this.formData.value.authLevel;	
  this.cache_fac.Comments= this.formData.value.businessjustification;
  sessionStorage.setItem('cache',JSON.stringify(this.cache_fac));
  console.log("cached");
}

if(this.service=='mobile_new'){

  console.log("Starting cache_fac");
  this.cache_mobile.setflag=true;
  this.cache_mobile.cnum=this.cnum;
  this.cache_mobile.Comments= this.formData.value.Comments;
  sessionStorage.setItem('cache',JSON.stringify(this.cache_mobile));
  console.log("cached");

}


}

} 
