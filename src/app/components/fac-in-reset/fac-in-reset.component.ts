import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { Db2Service } from '../../_services/db2.service';
import {Fac_Update} from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-fac-in-reset',
  templateUrl: './fac-in-reset.component.html',
  styleUrls: ['./fac-in-reset.component.css']
})
export class FacInResetComponent implements OnInit {

  build: any = [];
  campus:any;
  hideBuilding = true;
  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  Jabber:any = [];
  Voice_Mail : any="No";
  //cos : any =[];
  //itns:any = [];
  //vm :any;
  //css :any;
  //Jabber_Identifier:any;
  //selected = true;
  hideChargeDept = true;
  currentcos=true;
  currentVoiceMail = true;
  hideDeptCode = true;
  updaterequested=true;
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  //jabberDisp:any;
  chargeDisp:any;
  reqFor: any;
  employeeSerial = '';
  service = '';
  cnum: any;
  countrydetails : any;
  orgi:any;	
  reqno:any;
  hideSteps = false
  isButtonVisible = true;	
  isSpinnerVisible= false;
  pcode: any;
  sessionwarninginfo:any;
  sessionwarninginfosnow:any;
  warninginfo=false;
  warninginfosnow=false;
  identifier:any;
  // index:any;
  toup_disp : any;
  toup_disp2 : any;
  toup_disp3 : any;
  bj_disp : any;
  classOfService : any =[];
  checked : any=false;
  checked2 : any=false;
  checked3 : any=false;
  newLocation = true
  newFunded = true;
  // newcos = true;
  newAuthorizationLevel = true
  businessJust= true;
  errorinfo=false;

  currLocation = ''
  currChargeDeptCode = ''
  currAuthorizationLevel = ''
  currFACCodeType = ''
  currvalidity = ''
  newvoicemail = ''
  Location_1 = ''
  Buildings = ''
  Funded = ''
  chargeDepartmentCode = ''
  authLevel = ''
  camp: any = [];	
  campA: any = [];
  buildA: any =[];
  locationlist: any;
  radioFunded: string = "";
  j=0;

  payload : Fac_Update = new Fac_Update();
  db2data: any

  toggle_options(){
    if (this.checked){
    this.newLocation=false;
    this.toup_disp="Location";
    }
    else{
    this.newLocation=true;
    this.toup_disp='';
    }

    if (this.checked2){
    this.newFunded=false;
    this.toup_disp2="Funded";
     }
    else{
      this.newFunded=true;
      this.toup_disp2='';
    }

    if (this.checked3){
      this.newAuthorizationLevel=false;
      this.toup_disp3="Authorization Level";
       }
      else{
        this.newAuthorizationLevel=true;
        this.toup_disp3='';
      }
  }

  hidebusinessjust(select : any){

   if((select != "") && (select.toUpperCase() =="INTERNATIONAL"))
   this.businessJust= false;
   else
   this.businessJust= true;

  }
 
  EntryDetails(formData: NgForm) {
    if((this.checked===false)&&(this.checked2===false)&&(this.checked3===false)) {
      alert('Please select update required for');
      return;
    }
      
    if(this.checked) {
      if(formData.value.Location_1 ==='' || formData.value.Location_1.toLowerCase() ==='select office location' ) {
        alert('Please select office location');
        return;
      }

      if(formData.value.Buildings ==='' || formData.value.Buildings.toLowerCase() ==='select one' ) {
        alert('Please select a campus');
        return;
      }

      if(formData.value.Location_1 + '~~' + formData.value.Buildings === this.currLocation ) {
        alert('Please provide a new campus');
        return;
      }
    }

    if(this.checked2 && formData.value.Voice_Mail ==='Yes') {
      if(formData.value.chargeDepartmentCode === '') {
        alert('Please enter the charge department code');
        return;
      }
      if(formData.value.chargeDepartmentCode === this.currChargeDeptCode) {
        alert('Please enter a new charge department code');
        return;
      }
    }

    if(this.checked3) {
      if(formData.value.authLevel ==='' || formData.value.authLevel.toLowerCase() ==='select authorization level' ) {
        alert('Please select an authorization level');
        return;
      }
      if(formData.value.authLevel === this.currAuthorizationLevel  ) {
        alert('Please provide a new authorization level');
        return;
      }
    }

    if(formData.value.businessjustification == ''){
      alert('Please enter Business Justification');
      return;
    }
  
  //  this.jabberDisp = formData.value.Jabber_1;
    // this.new_cos_disp=formData.value.select_cos;
    // this.new_vm_disp=formData.value.Voice_Mail;
    this.Location_1 = formData.value.Location_1
    this.Buildings = formData.value.Buildings
    this.Funded = formData.value.Voice_Mail
    this.chargeDepartmentCode = formData.value.chargeDepartmentCode
    this.authLevel = formData.value.authLevel
    this.bj_disp=formData.value.businessjustification;
    this.isReviewForm = false;
    this.isEntryForm = true;
  }
  // Submit to Snow Jabber new code added by Swarnava ends	
  backClick() {
    sessionStorage.setItem('backbutton', 'yes');
    sessionStorage.setItem('step', 'step1');
    this.location.back();
    
  }

  isFunded() {
    if(this.Voice_Mail ==='Yes'){
      this.hideDeptCode = false
    } else {
      this.hideDeptCode = true
    }
  }

  BackButton() {
    this.isReviewForm = true;
    this.isEntryForm = false;
  }

  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-US-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.Projectid_Disp = '';
     // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
      this.payload.Department_number_Disp = '';
      this.payload.accid_Disp = '';
      //this.payload.Identifier_Selected = this.jabberDisp;
      this.payload.updated_for = '';
      this.payload.ReqNo=this.reqno;
      // this.payload.Current_COS=this.cos_disp;
      // this.payload.Current_VM=this.vm_disp;
      // this.payload.Justification=this.bj_disp;
      // this.payload.New_Voice=this.new_vm_disp;
      // this.payload.New_COS=this.new_cos_disp
      // fields to be picked up from form -- ends	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_update';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.prov_type=this.countrydetails.provision_type;
      this.payload.updated_for=this.toup_disp+','+this.toup_disp2;
      	
     this.servicenowservice.submit_request_fac_update(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ queryParams: { country: this.pcode,service:this.service }}) ;	
     },
     (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.isSpinnerVisible= false; 	
      this.errorinfo=true;
      this.isButtonVisible=true;
    });	
     }	
   
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private Db2Service: Db2Service,private servicenowservice:servicenowservice,private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    // Submit to Snow Jabber Update code
    this.cnum = sessionStorage.getItem('cnum');
    this.orgi = this.cookie.getCookie('ccode');
    this.countrydetails = sessionStorage.getItem('countrydetails');
    this.countrydetails = JSON.parse(this.countrydetails);

    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.sessionwarninginfo = sessionStorage.getItem('warninginfo')
    this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow')
    if (this.sessionwarninginfo == 'false1') {
      this.warninginfo = true
    }
    else if (this.sessionwarninginfosnow == 'true1') {
      this.warninginfosnow = true
      this.identifier = sessionStorage.getItem('identifier')?.replace(" ","");
    }
    else {
      this.identifier = sessionStorage.getItem('identifier')
      this.identifier = this.identifier.split(',');
      this.Jabber = [...this.identifier];
      this.db2data = sessionStorage.getItem('db2data')
      this.db2data = JSON.parse(this.db2data)
      this.currLocation = this.db2data[0].ATTRIBUTE3
      this.currChargeDeptCode = this.db2data[0].ATTRIBUTE7
      this.currAuthorizationLevel = this.db2data[0].ATTRIBUTE4
      this.currFACCodeType = this.db2data[0].ATTRIBUTE5
      this.currvalidity = this.db2data[0].ATTRIBUTE6
    }
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
    this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
    
    this.cloudantData  = {
      "code": this.ccode,
      "name": this.countryname.name,
      "isocode": this.countryname.isocode,
      "isjabber": this.countryname.isjabber,
      "isfixedphone": this.countryname.isfixphone,
      "isfac": this.countryname.isfac,
      "isspecial": this.countryname.isspecial
    }
  });
  const servicesData = { 	
    "data": [	
      {    		
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "step" : 3,	
        
      }	
    ]	

   
  }	
  
  this.reqFor = sessionStorage.getItem('radioAction');
    this.servicesData = servicesData.data[0]

    if(this.warninginfo || this.warninginfosnow){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }
  }
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
  }

  
  selectedLocation(loc:String) {	
    this.build = [];	
    this.campus = '';	
    //alert("Location"+loc);
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
