import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { Create_Cache_jabber, Jabber_Move, removeDiacritics } from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-voip-in-move',
  templateUrl: './voip-in-move.component.html',
  styleUrls: ['./voip-in-move.component.css']
})
export class VoipInMoveComponent implements OnInit {
  hideDeptCode: boolean = true;
  jabberNumber = [78979812, 79870945];
  Voice_Type = "No";
  hideBuilding = true;
  displayDiv = false;
  isReviewFormMove = true;
  isEntryFormMove = false;
  errorinfo:any;
  identifier:any = [];
  campA: any = [];
  camp: any = [];
  buildA: any = [];
  build: any = [];
  j = 0;
  countryname: any;
  ccode = '';
  orgi: any;
  cnum: any;
  countrydetails: any;
  isButtonVisible = true;
  isSpinnerVisible = false;
  locationlist: any;
  reqno: any;
  cloudantData: any = [];
  servicesData: any = [];	
  sessionwarninginfo:any
  sessionwarninginfosnow:any
  warninginfo=false;
  warninginfosnow=false;
  Locations: any;	
  pcode: any;	
  service: any;	
  Jabber:any = [];
  employeeInfo: any;	
  employeeInfo1: any;	
  campus: any;
  reqFor: any;
  hideProjectId = false;
  hideSteps = false;
  currentLocations:any = [];
  currentPLocations:any = [];
  selectedjabber:any;
  chargeDeptValue:any = '';
  projectIdValue:any = '';
  cache_tmp:  any = [];
  selected_jabber ="";
  selected_location="";

  payload: Jabber_Move = new Jabber_Move();
  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_disp : Create_Cache_jabber = new Create_Cache_jabber();
  
  reviewDetailsIndia = {
    jabberNumbertoMove: "",
    officeLocation: "",
    campus: "",
    funded: "",
    chargeDepartmentCode: "",
    businessUnit: "",
    projectId: "",
    fixPhoneIdentifier: " ",
    Voice_Type_Disp: "",
    icano_Disp: "",
    Location_final: "",
    Identifier_Disp: "",
    reqno: "",
    currentLocation: ""
  }
 backClick(formData: NgForm): void{	
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

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) {
   /* this.Locations = {
      locc: ['Banglore~~MTP', 'Banglore~~SA',
        'Gurgaon~~DLF Infinity', 'Gurgaon~~ASF', 'Hyderabad~~Hitech', 'Hyderabad~~Hitech2']
    };
    for (var i = 0; i < this.Locations.locc.length; i++) {
      var n = this.Locations.locc[i].indexOf("~")
      this.campA[i] = this.Locations.locc[i].substr(0, n);
      this.buildA[i] = this.Locations.locc[i].substr(n + 2, this.Locations.locc[i].length);
    }
    for (var i = 0; i < this.campA.length; i++) {
      if (this.campA[i] != this.campA[i + 1]) {
        this.camp[this.j] = this.campA[i];
        this.j++;
      }
    }*/
  }

  getjabberNumberVal(jabberNumberVal: string) {
    if(jabberNumberVal == '' || jabberNumberVal == 'undefined'){
      this.displayDiv = false;
      this.selected_location='';
    } else {
      this.displayDiv = true;
    }
    // if (jabberNumberVal != '' || jabberNumberVal != undefined) {
    //   this.displayDiv = true;
    // }
    // else{
    //   this.displayDiv = false;
    //   this.selected_location='';
    // }

    //alert(this.displayDiv + this.jabberNumberVal)
  }

  selectedLocation(loc: String) {
    this.build = [];
    this.campus = '';
    if (loc != '') {
      this.hideBuilding = false;
      var k = 0;
      for (var i = 0; i < this.campA.length; i++) {
        if (loc == this.campA[i]) {

          this.build[k] = this.buildA[i];
          k = k + 1;
        }
      }

    } else {
      this.hideBuilding = true;
      this.build = [];
    }
  }
  entryDetailsMove(formData: NgForm) {
    if (formData.value.Identifier_Selected == '') {
      alert('Please select the Jabber / Phone Number being moved.');
      return;
    }
    this.selectedjabber = formData.value.Identifier_Selected;
    if (formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {
      alert('Please select the appropriate office location');
      return;
    }
    if (formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '') {
      alert('Please select the appropriate campus.');
      return;
    }
    if (formData.value.Department_number.toUpperCase().trim() == '' && this.hideDeptCode == false) {
      alert('Please provide the charge department code.');
      return;
    }
    if((formData.value.Department_number.trim() == '' || formData.value.Department_number.includes(' ')) && this.hideDeptCode == false) {	
      alert('Please enter the correct Charge department code');	
      
      return;	
    }
    if((formData.value.Projectid.trim() == '' || formData.value.Projectid.includes(' ')) && this.hideProjectId == false) {	
      alert('Please enter the correct Project ID');	
      
      return;	
    }	
    
   
    this.isEntryFormMove = true;
    this.isReviewFormMove = false;
    this.errorinfo=false;
    this.reviewDetailsIndia.jabberNumbertoMove = formData.value.Identifier_Selected;
    this.reviewDetailsIndia.officeLocation = formData.value.Location_1;
    this.reviewDetailsIndia.campus = formData.value.Buildings;
    this.reviewDetailsIndia.funded = this.Voice_Type;
    this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;
    this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;	
    this.reviewDetailsIndia.projectId = formData.value.Projectid;
    for(var j=0;j<this.Jabber.length;j++){
      if(this.selectedjabber == this.Jabber[j]) {
        this.reviewDetailsIndia.currentLocation = this.currentLocations[j];
      }
    }

       //set up the cache for form values.
       this.create_cache(formData);
    

  }

  create_cache(formData:NgForm){

    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.selected_jabber = formData.value.Identifier_Selected;
    if(formData.value.Identifier_Selected==''){
    this.cache.officeLocation ='';
    }else{
    this.cache.officeLocation =  formData.value.Location_1;		
    }
    this.cache.campus = formData.value.Buildings;		
    this.cache.funded = this.Voice_Type;
    this.cache.chargeDepartmentCode=formData.value.Department_number;	
    this.cache.projectId=formData.value.Projectid;	
    this.cache.fixPhoneIdentifier= formData.value.identifier_hp;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
  }

  BackButton() {
    this.isEntryFormMove = false;
    this.isReviewFormMove = true;
  }

   // Submit to Snow Jabber move code 
  submit_snow() {
    this.reqno=this.countrydetails.isocode+"-MS-"+this.cnum.substr(0,6)+"-"+gettime();		
    sessionStorage.setItem('reqno', this.reqno)
    this.isButtonVisible = false;
    this.isSpinnerVisible = true;
    this.payload.orinator_payload = this.orgi;
    this.payload.cNum_payload = this.cnum;
    // fields picked up from form -- begins	
    //this.payload. = this.reviewDetailsIndia.campus;
    // by default set to true. below line can be removed if needed.	
    this.payload.Voice_Type_Disp = this.reviewDetailsIndia.funded;
    this.payload.Projectid_Disp = removeDiacritics(this.reviewDetailsIndia.projectId.replace(/[\n\r"\\+]/g, ' '));
    this.payload.icano_Disp = '';	
    this.payload.Identifier_Disp = this.reviewDetailsIndia.jabberNumbertoMove;
    this.payload.BusinessUnit_Disp = this.reviewDetailsIndia.businessUnit;
    this.payload.Department_number_Disp = removeDiacritics(this.reviewDetailsIndia.chargeDepartmentCode.replace(/[\n\r"\\+]/g, ' '));
    this.payload.Location_final = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
    this.payload.correct_location = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
    this.payload.accid_Disp='';
    this.payload.ReqNo = this.reqno;

    // fields to be picked up from form -- ends	
    this.payload.level1_japproval = this.countrydetails.level1_japproval;
    this.payload.level2_japproval = "";
    //this.payload.SLA_type = this.countrydetails.SLA_type;
    this.payload.gvs_approval_link = this.countrydetails.gvs_approval_link;
    this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
    this.payload.countryname = this.countrydetails.name;
    this.payload.request_type = 'jabber_move';
    this.payload.evolution_instance = this.countrydetails.evolution_instance;
    this.payload.qag = this.countrydetails.qag;
    this.payload.class_of_serice = this.countrydetails.class_of_serice;
    this.payload.default_call_permission=this.countrydetails.default_call_permission;
    this.payload.Site_location= this.reviewDetailsIndia.currentLocation;
    //this.payload.country_code = this.countrydetails.code;
    console.log('Payload');
    //console.log(this.payload);	
    this.servicenowservice.submit_request_move(this.payload).subscribe(data=> {	
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

  showChargeDepartmentCode() {
    this.hideDeptCode = false;
  }

  hideChargeDepartmentCode() {
    this.hideDeptCode = true;
  }


  ngOnInit(): void {
    
     this.orgi=this.cookie.getCookie('ccode');	
     this.cnum = sessionStorage.getItem('cnum') ;	
     this.countrydetails = sessionStorage.getItem('countrydetails');	
     this.countrydetails = JSON.parse(this.countrydetails);	      
        
     this.ccode=this.cookie.getCookie('ccode').substring(6,9);
     this.sessionwarninginfo=sessionStorage.getItem('warninginfo')
    this.sessionwarninginfosnow=sessionStorage.getItem('warninginfosnow')
    if (this.sessionwarninginfo =='false1'){
      this.warninginfo = true
    }
    else if(this.sessionwarninginfosnow =='true1') {
this.warninginfosnow=true
this.identifier=sessionStorage.getItem('identifier')

    }
    else{
      this.identifier=sessionStorage.getItem('identifier') 
      this.identifier = this.identifier.split(',');
      this.Jabber = [...this.identifier];
      this.currentPLocations= sessionStorage.getItem('profile_location');
      this.currentPLocations = this.currentPLocations.split(',');
      this.currentLocations = [...this.currentPLocations]; 
    }	
     this.route.queryParams	
     .subscribe(params => {	
       console.log(params);	
       this.service=params.service;	
       this.pcode = params.country;	
       console.log("navigation component" + this.pcode);	
     
     this.locationlist=sessionStorage.getItem('locationdetails')?.replace('"','');
     if(this.locationlist != undefined) {
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
    }
     const servicesData = { 	
       "data": [	
         {    	
           
           "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
           "step" : 3,	
           
         }	
       ]	
   
      
     }
     
     
     this.servicesData = servicesData.data[0];
     if(this.warninginfo || this.warninginfosnow){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }		
     this.employeeInfo1 = sessionStorage.getItem('employeeInfo')	
     this.employeeInfo = JSON.parse(this.employeeInfo1);	
     if(this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null){
       this.hideProjectId = true;
       }
       this.reqFor = sessionStorage.getItem('radioAction')
      });   	

          //load cache data for entry details form. -- START
    this.cache_tmp=sessionStorage.getItem('cache')	
    console.log(this.cache_tmp);
    this.cache_disp=JSON.parse(this.cache_tmp);
    if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='jabber_move')){
      this.selected_jabber=String(this.cache_disp.selected_jabber);
      this.getjabberNumberVal(String(this.cache_disp.selected_jabber));
      this.selected_location=String(this.cache_disp.officeLocation) ;
      this.selectedLocation(this.cache_disp.officeLocation);
      if((this.cache_disp.officeLocation.toUpperCase()== 'SELECT OFFICE LOCATION') || (this.cache_disp.officeLocation=='') )
      this.hideBuilding=true;
      else
      this.hideBuilding=false;
      this.campus = String(this.cache_disp.campus);	
      this.Voice_Type= String(this.cache_disp.funded);
      this.projectIdValue = this.cache_disp.projectId;
      if(this.cache_disp.funded=='Yes'){
        this.showChargeDepartmentCode();
      }
        else
        {
        //this.chargeDeptValue= '';
        this.hideChargeDepartmentCode();
        }
        this.chargeDeptValue=  this.cache_disp.chargeDepartmentCode;
       
        console.log("cache restored ");
    }else{
      sessionStorage.removeItem('cache');
    }

    //load cache data for entry details form. -- START
  } 
  previousStep(event : any){
    this.isEntryFormMove = false;	
    this.isReviewFormMove = true;	
 	
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