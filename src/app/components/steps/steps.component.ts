import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Create_Cache_jabber,Create_Cache_fixedphone } from 'config/payload';

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
  @Input('FixedPhoneData') FixedPhoneData : any;
  @Input('formData') formData !:NgForm;
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

   if(this.service !== 'jabber_new' && this.step === 3 && this.isWarning === true){
    this.isWarning2 = true
    this.isWarning3 = true
    this.isWarning1 = false
   }

  if (this.step === 3 && this.isSelf === true){
    this.step = 2
  }

  if (this.step === 4 && this.isSelf === true){
    this.step = 3
  }

  }
  sendToEntryDetails () {
    this.previousStep.emit('true')
  }

  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_fixed : Create_Cache_fixedphone = new Create_Cache_fixedphone();
  cache_data(){

  if(this.service=='jabber_new'){
    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    if(this.formData.value.Location!=undefined)
    this.cache.officeLocation = this.formData.value.Location;		
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
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached"+JSON.stringify(this.cache));

  }

  if(this.service=='jabber_move'){
    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.selected_jabber = this.formData.value.Identifier_Selected;	
    if(this.cache.selected_jabber==''){
    this.cache.officeLocation ='';
    this.cache.funded ="No";
    }
    else{
    this.cache.officeLocation =  this.formData.value.Location_1;
    this.cache.funded = this.formData.value.Voice_Type;		
    }
    this.cache.campus = this.formData.value.Buildings;		
    
    this.cache.chargeDepartmentCode=this.formData.value.Department_number;	
    this.cache.projectId=this.formData.value.Projectid;	
    this.cache.fixPhoneIdentifier= this.formData.value.identifier_hp;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
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
  this.cache_fixed.employeeId = this.FixedPhoneData.empID;
  this.cache_fixed.voicemail = this.formData.value.Voicemail;
  this.cache_fixed.justification = this.formData.value.Justification;
  this.cache_fixed.description = this.formData.value.Description;
  this.cache_fixed.mac = this.formData.value.MACAddress;
  this.cache_fixed.goClick = this.FixedPhoneData.goClick;
  this.cache_fixed.emailClick = this.FixedPhoneData.emailClick;
  this.cache_fixed.emailResult = this.FixedPhoneData.emailResult;
  this.cache_fixed.showBusinessNeed = this.FixedPhoneData.showBusinessNeed;
  this.cache_fixed.cos = this.FixedPhoneData.COS;
  this.cache_fixed.employeeIDDisplay = this.FixedPhoneData.employeeID;
  sessionStorage.setItem('cache',JSON.stringify(this.cache_fixed));
  console.log("cached");
  }


}

} 
