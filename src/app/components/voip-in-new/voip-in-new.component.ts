import { Component, Input, OnInit } from '@angular/core';	
import { cloudantservice } from '../../_services/cloudant.service';	
import { CookieHandlerService } from '../../_services/cookie-handler.service';	
import { NgForm } from '@angular/forms';	
import {Router,RouterEvent, NavigationEnd} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Create_Cache_jabber, Jabber_New, removeDiacritics} from '../../../../config/payload';	
import { analyzeAndValidateNgModules } from '@angular/compiler';	
import {Location} from '@angular/common';	

  
  
@Component({	
  selector: 'app-voip-in-new',	
  templateUrl: './voip-in-new.component.html',	
  styleUrls: ['./voip-in-new.component.css']	
})	
export class VoipInNewComponent implements OnInit {	
    
  
   
    campA: any = [];	
    camp: any = [];	
    buildA: any = [];	
    build: any = [];	
    j = 0;	
    countryname:any;	
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
  hideDeptCode = true;	
  hideBuilding = true;	
  fixedPhoneIdentifier = false;	
  identifier_hardphone: any;
  cloudantData: any = []	
  servicesData: any = []	
  Locations: any;	
  identifier_hp="";
  locationlist: any;	
  selected_location ="";
  selected_campus="";
  previousUrl:any
  pcode: any;	
  service: any;	
  locSelected : any
  //min = 1000;	
  //max = 9000;	
  employeeInfo: any;	
  employeeInfo1: any;	
  campus:any;	
  hideProjectId = false;
  reqFor: any;
  chargeDeptValue:any = '';
  projectIdValue:any = '';
  cache_tmp:  any = [];
  index: any;
  l2approver:any
  
    
      
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { 	
      
    /*this.Locations = {	
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
  
  // Submit to Snow Jabber new code added by Swarnava	
  
  payload : Jabber_New = new Jabber_New();	
  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_disp : Create_Cache_jabber = new Create_Cache_jabber();

  
  reviewDetailsIndia = {	
  
    officeLocation:	"",	
    campus:	"",	
    funded:	"",	
    chargeDepartmentCode:	"",	
    businessUnit:	"",	
    projectId: "",	
    fixPhoneIdentifier: "",	
    Voice_Type_Disp : "",	
    icano_Disp : "",	
    Location_final :"",	
    accid_Disp: "",	
    reqno:""
    
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
}	
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
  
  showChargeDepartmentCode() {	
    this.hideDeptCode = false;	
  }	
  
  hideChargeDepartmentCode() {	
    this.hideDeptCode = true;	
  }	
  getl2approver(){
    if(this.ccode=='744'){
    if(this.reviewDetailsIndia.businessUnit=="GTS-GD"){this.l2approver="GVS_L2_APPROVER_IN_GTS-GD"}
    else if(this.reviewDetailsIndia.businessUnit=="GTS"){ this.l2approver="GVS_L2_APPROVER_IN_GTS"}
     else if(this.reviewDetailsIndia.businessUnit=="ISDL"){this.l2approver="GVS_L2_APPROVER_IN_ISDL"}
      else if(this.reviewDetailsIndia.businessUnit=="ISL"){this.l2approver="GVS_L2_APPROVER_IN_ISL" }
      else if(this.reviewDetailsIndia.businessUnit=="CPS"){this.l2approver="GVS_L2_APPROVER_IN_CPS"}
      else if(this.reviewDetailsIndia.businessUnit=="GPS"){this.l2approver="GVS_L2_APPROVER_IN_GPS"}
       else if(this.reviewDetailsIndia.businessUnit=="GBS"){this.l2approver="GVS_L2_APPROVER_IN_GBS"}
        else if(this.reviewDetailsIndia.businessUnit=="IRL"){this.l2approver="GVS_L2_APPROVER_IN_IRL"}
         else if(this.reviewDetailsIndia.businessUnit=="S&D"){this.l2approver="GVS_L2_APPROVER_IN_S&D"}
         else{this.l2approver="GVS_L2_APPROVER_IN_Others"}}
        else if(this.ccode=='652'){this.l2approver="GVS_L2_APPROVER_LK_All"}
  }
  entryDetails(formData: NgForm) {	
      
    if(formData.value.Location_1.toUpperCase() == 'SELECT ONE' || formData.value.Location_1 == '') {	
      alert('Please select the appropriate office location');	
      return;	
    }	
    if(formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '' || formData.value.Location_1.toUpperCase() != 'SELECT ONE' && formData.value.Buildings == '') {	
      alert('Please select the appropriate campus.');	
      return;	
    }	
    if(formData.value.Department_number.toUpperCase() == '' && this.hideDeptCode == false) {	
      alert('Please provide the charge department code.');	
      return;	
    }	
    if((formData.value.Department_number.trim() == '' || formData.value.Department_number.includes(' ')) && this.hideDeptCode == false) {	
      alert('Please enter the correct Charge department code');	
      this.chargeDeptValue = ''
      return;	
    }	
    if(formData.value.Projectid == '' && this.hideProjectId == false) {
      alert('Please provide the project ID.');
      return;
    }
    if((formData.value.Projectid.trim() == '' || formData.value.Projectid.includes(' ')) && this.hideProjectId == false) {	
      alert('Please enter the correct Project ID');	
      this.projectIdValue = '';
      return;	
    }	
  
    if(formData.value.identifier_hp.trim() == '') {
      this.fixedPhoneIdentifier = true;	
    } else {
    var pat = /[&\/\\#+()$~%.'":;*? !~`@<>{}a-zA-Z]/g;
    if(pat.test(formData.value.identifier_hp) || formData.value.identifier_hp.trim().length != '8') {
      alert('Please enter the correct Identifier for Fixed Phone');
      return;
    }
  
}
    this.isEntryForm = true;	
    this.isReviewForm = false;	
  
    this.reviewDetailsIndia.officeLocation = formData.value.Location_1;	
    this.reviewDetailsIndia.campus = formData.value.Buildings;	
    this.reviewDetailsIndia.funded = this.Voice_Type;	
    this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;	
    this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;
    this.reviewDetailsIndia.businessUnit=this.reviewDetailsIndia.businessUnit.trim()	
    this.reviewDetailsIndia.projectId = formData.value.Projectid;	
    this.reviewDetailsIndia.fixPhoneIdentifier = formData.value.identifier_hp;	

    //set up the cache for form values.
     this.create_cache(formData);
  }	

  create_cache(formData:NgForm){

    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.officeLocation =  formData.value.Location_1;		
    this.cache.campus = formData.value.Buildings;		
    this.cache.funded = this.Voice_Type;
    this.cache.chargeDepartmentCode=formData.value.Department_number;	
    this.cache.projectId=formData.value.Projectid;	
    this.cache.fixPhoneIdentifier= formData.value.identifier_hp;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
  }
  
  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
  }	
  
   // Submit to Snow Jabber new code added by Swarnava	
  submit_snow(){	
    this.getl2approver();
    this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.Buildings_Disp=this.reviewDetailsIndia.campus;	
      // by default set to true. below line can be removed if needed.	
      this.payload.Voice_Type_Disp = this.reviewDetailsIndia.funded;	
      this.payload.Projectid_Disp = removeDiacritics(this.reviewDetailsIndia.projectId.replace(/[\n\r"+]/g, ' '));	
      this.payload.icano_Disp = "";
      this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;	
      this.payload.BusinessUnit_Disp =this.reviewDetailsIndia.businessUnit;	
      this.payload.Department_number_Disp = removeDiacritics(this.reviewDetailsIndia.chargeDepartmentCode.replace(/[\n\r"+]/g, ' '));	
      this.payload.Location_final =this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
      this.payload.accid_Disp="";
      this.payload.ReqNo=this.reqno;	

      this.locSelected = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
      if(this.countrydetails.did_loc_formula_jabber){
        // Assign location value from cloudant. Needed for ITN allocation
        eval(this.countrydetails.did_loc_formula_jabber);
      } else {
        this.payload.DID_Location =this.locSelected
      } 
  
      // fields to be picked up from form -- ends	
      this.payload.level1_japproval=this.countrydetails.level1_japproval;	
      this.payload.level2_japproval=this.l2approver;	
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
      this.selectedLocation(this.cache_disp.officeLocation);
      if((this.cache_disp.officeLocation.toUpperCase()== 'SELECT ONE') || (this.cache_disp.officeLocation=='') )
      this.hideBuilding=true;
      else
      this.hideBuilding=false;
      this.campus = String(this.cache_disp.campus);	
      this.Voice_Type= String(this.cache_disp.funded);
      this.projectIdValue = this.cache_disp.projectId;
      if(this.cache_disp.funded=='Yes'){
       // this.chargeDeptValue=  this.cache_disp.chargeDepartmentCode;
        this.showChargeDepartmentCode();
      }
        else
        {
        //this.chargeDeptValue= '';
        this.hideChargeDepartmentCode();
        }
        this.chargeDeptValue=  this.cache_disp.chargeDepartmentCode;
        if(this.cache_disp.fixPhoneIdentifier.trim()=='')
        this.identifier_hp ='';
        else
        this.identifier_hp = String(this.cache_disp.fixPhoneIdentifier);
       
        console.log("cache restored");
    }else{
      sessionStorage.removeItem('cache');
    }

    //load cache data for entry details form. -- START

  }	

  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
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
