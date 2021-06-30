import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { Db2Service } from '../../_services/db2.service';
import {Create_Cache_fac, Fac_Update, removeDiacritics} from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-fac-in-update',
  templateUrl: './fac-in-update.component.html',
  styleUrls: ['./fac-in-update.component.css']
})
export class FacInUpdateComponent implements OnInit {
  
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
  cache_tmp:  any = []
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
  authValue =''
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
  currLocation1 = ''
  currBuilding = ''
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
  UpdatedFor = ''
  UpdatedForValues = ''
  newAuthLevelValue =''
  camp: any = [];	
  campA: any = [];
  buildA: any =[];
  locationlist: any;
  radioFunded: string = "";
  j=0;
  selected_location ="";
  selected_campus="";
  Comments = ''
  Fac_Type = ''
  validity = ''
  businessjustification = ''

  payload : Fac_Update = new Fac_Update();
  db2data: any

  cache : Create_Cache_fac = new Create_Cache_fac();
  cache_disp : Create_Cache_fac = new Create_Cache_fac();
  countryroute: any;
  facIn: boolean = false;
  facSl: boolean = false;

  toggle_options(){
    if (this.checked){
    this.newLocation=false;
    this.toup_disp="Office Location";
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
      this.getUpdatedFor()
  }

  hidebusinessjust(select : any){

   if((select != "") && (select.toUpperCase() =="INTERNATIONAL"))
   this.businessJust= false;
   else
   this.businessJust= true;

  }
 
  EntryDetails(formData: NgForm) {
    if((this.checked===false)&&(this.checked2===false)&&(this.checked3===false)) {
      alert('Please provide the update requirements.');
      return;
    }
      
    if(this.checked) {
      if(formData.value.Location_1 ==='' || formData.value.Location_1.toLowerCase() ==='select one' ) {
        alert('Please select office location');
        return;
      }

      if(formData.value.Buildings ==='' || formData.value.Buildings.toLowerCase() ==='select one' ) {
        alert('Please select the appropriate campus.');
        return;
      }
      if(this.currLocation1 && this.currBuilding){
        if(formData.value.Location_1.toLowerCase().trim() + '~~' + formData.value.Buildings.toLowerCase().trim() === this.currLocation1.toLowerCase().trim() + '~~' + this.currBuilding.toLowerCase().trim()) {
          alert('Please select a new campus.');
          return;
        }
      }
    }

    if(this.checked2 && formData.value.Voice_Mail ==='Yes') {
      if(formData.value.chargeDepartmentCode === '') {
        alert('Please provide the charge department code.');
        return;
      }
      if(formData.value.chargeDepartmentCode.trim() === this.currChargeDeptCode) {
        alert('Please enter a new charge department code');
        return;
      }
    }

    if(this.checked3) {
      if(formData.value.authLevel ==='' || formData.value.authLevel.toLowerCase() ==='select one' ) {
        alert('Please select the appropriate authorization level.');
        return;
      }
      if(formData.value.authLevel === this.currAuthorizationLevel  ) {
        alert('Please provide a new authorization level');
        return;
      }
    }

    if(formData.value.businessjustification == ''){
      alert('Please provide a business justification.');
      return;
    }
  
    this.Location_1 = formData.value.Location_1
    this.Buildings = formData.value.Buildings
    this.Funded = formData.value.Voice_Mail
    this.chargeDepartmentCode = formData.value.chargeDepartmentCode
    this.authLevel = formData.value.authLevel
    this.newAuthLevelValue = this.authCalculation(formData.value.authLevel)
    this.bj_disp=formData.value.businessjustification;
    this.bj_disp=formData.value.businessjustification.replace(/[\n\r"+]/g, ' ');
    this.isReviewForm = false;
    this.isEntryForm = true;
    this.authValue = this.authCalculation(this.currAuthorizationLevel)

    //set up the cache for form values.
    this.create_cache(formData);

  }

  create_cache(formData:NgForm){

    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.updatefor = this.getUpdatedFor()
    this.cache.officeLocation =  formData.value.Location_1;		
    this.cache.campus = formData.value.Buildings;		
    this.cache.funded = formData.value.Voice_Mail;
    this.cache.chargeDepartmentCode=formData.value.chargeDepartmentCode;	
    this.cache.authLevel=formData.value.authLevel;	
    this.cache.Comments= formData.value.businessjustification;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
  }

  authCalculation(val:any): string{
    if(val==='STD'){
      return '4'
    } else if (val==='Local') {
      return '3'
    } else if (val==='ISD') {
     return '5'
    } else {
      return ''
    }
  }

  // Submit to Snow Jabber new code added by Swarnava ends	
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

  isFunded() {
    if(this.Voice_Mail ==='Yes'){
      this.hideDeptCode = false
    } else {
      this.hideDeptCode = true
    }
  }
  
  showChargeDepartmentCode() {	
    this.hideDeptCode = false;	
  }	
  
  hideChargeDepartmentCode() {	
    this.hideDeptCode = true;	
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
      this.payload.currLocation=this.currLocation;	
      this.payload.currChargeDeptCode=this.currChargeDeptCode;	
      this.payload.currAuthorizationLevel=this.authValue;	
      this.payload.currFACCodeType=this.currFACCodeType;	
      this.payload.currvalidity=this.currvalidity;	
      // fields picked up from form -- begins	
      this.payload.Location_1 = this.Location_1
      this.payload.Buildings = this.Buildings
      this.payload.Funded = this.Funded
      this.payload.chargeDepartmentCode = removeDiacritics(this.chargeDepartmentCode.replace(/[\n\r"\\+]/g, ' '));
      this.payload.authLevel = this.newAuthLevelValue
      this.payload.bj_disp= removeDiacritics(this.bj_disp.replace(/[\n\r"\\+]/g, ' '));
      this.payload.ReqNo=this.reqno;
      this.payload.updated_for= this.getUpdatedFor()
      this.payload.updated_for_values= removeDiacritics(this.UpdatedForValues.replace(/[\n\r"\\+]/g, ' '));
      // fields to be picked up from form -- ends	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='fac_update';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.prov_type=this.countrydetails.provision_type;
      	
     this.servicenowservice.submit_request_fac_update(this.payload).subscribe(data=> {	
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
   
  getUpdatedFor(): any{
    this.UpdatedFor = ''
    this.UpdatedForValues = ''
       if (this.toup_disp){
         this.UpdatedFor = this.toup_disp
         this.UpdatedForValues = this.Location_1 +'~~'+ this.Buildings
       }
       if(this.toup_disp2){
        this.UpdatedFor += ','+ this.toup_disp2
        this.UpdatedForValues += ','+ this.chargeDepartmentCode
       }
       if(this.toup_disp3){
        this.UpdatedFor += ','+ this.toup_disp3;
        this.UpdatedForValues += ','+ this.authLevel
       }

       return this.UpdatedFor
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
      this.currLocation1 = this.currLocation.split('~~')[0]
      this.currBuilding = this.currLocation.split('~~')[1]
      this.currChargeDeptCode = this.db2data[0].ATTRIBUTE7
      this.currAuthorizationLevel = this.db2data[0].ATTRIBUTE4
      this.currFACCodeType = this.db2data[0].ATTRIBUTE5
      this.currvalidity = this.db2data[0].ATTRIBUTE6
    }

    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
    })	
    
    this.countryroute=sessionStorage.getItem('countryroute')
    if (this.countryroute === '744' || this.countryroute === '652' ) {
      this.facIn = true
    } else {
      this.facIn = false
    }

    if (this.countryroute === '652' ) {
      this.facSl = true
    } else {
      this.facSl = false
    }

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
          "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
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

  //load cache data for entry details form. -- START
  this.cache_tmp=sessionStorage.getItem('cache')	
  console.log(this.cache_tmp);
  this.cache_disp=JSON.parse(this.cache_tmp);

  if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='fac_update')){
    this.UpdatedFor = String(this.cache_disp.updatefor);
    this.updateRequiredFor(this.UpdatedFor);
    this.Location_1=String(this.cache_disp.officeLocation) ;
    this.selectedLocation(this.cache_disp.officeLocation);

    if((this.cache_disp.officeLocation.toUpperCase()== 'SELECT ONE') || (this.cache_disp.officeLocation=='') )
      this.hideBuilding=true;
    else
      this.hideBuilding=false;
      
      this.Buildings = String(this.cache_disp.campus);	
      this.Voice_Mail= String(this.cache_disp.funded);
      this.authLevel=String(this.cache_disp.authLevel);	
      this.Fac_Type= String(this.cache_disp.Fac_Type);
      this.validity= String(this.cache_disp.validity);
      this.businessjustification= String(this.cache_disp.Comments);
    if(this.cache_disp.funded=='Yes'){
     // this.chargeDeptValue=  this.cache_disp.chargeDepartmentCode;
      this.showChargeDepartmentCode();
    } else {
      //this.chargeDeptValue= '';
      this.hideChargeDepartmentCode();
      }
      this.chargeDepartmentCode=  String(this.cache_disp.chargeDepartmentCode);

      console.log("cache restored");
  }else{
    sessionStorage.removeItem('cache');
  }

  //load cache data for entry details form. -- End


  
  }
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
  }

  updateRequiredFor(updatefor: String){
    if(updatefor.includes('Office Location')){
      this.checked = true
    } else {
      this.checked = false
    }
    if (updatefor.includes('Funded')) {
      this.checked2 = true
    }  else {
      this.checked2 = false
    }
    if (updatefor.includes('Authorization Level')) {
      this.checked3 = true
    }  else {
      this.checked3 = false
    }
    this.toggle_options()
  }
  
  selectedLocation(loc:String) {	
    this.build = [];	
    this.campus = '';	
    this.Buildings = ''	
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
