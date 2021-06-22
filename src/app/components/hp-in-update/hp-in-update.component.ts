import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Location} from '@angular/common';	
import { fixedphone_update,Create_Cache_fixedphone, removeDiacritics} from 'config/payload';
import {Db2Service} from '../../_services/db2.service';
import { TranslateConfigService } from '../../_services/translate-config.service'; 

@Component({
  selector: 'app-hp-in-update',
  templateUrl: './hp-in-update.component.html',
  styleUrls: ['./hp-in-update.component.css']
})
export class HpInUpdateComponent implements OnInit {

  
  campA: any = [];	
  camp: any = [];	
  buildA: any = [];	
  build: any = [];
  orgi:any;	
  cnum : any;	
  countrydetails : any;
  updateRequiredFor: any;
  hideDeviceSection = true;
  models:any;
  selected_device:any = '';
  cloudantData: any = []	
  servicesData: any = []
  reqFor: any;
  campus:any;
  j = 0;	
  ccode='';	
  locationlist: any;	
  pcode: any;	
  mainConfiguration :any;
  service: any;

  currentMac: string = "";
  currentPhone: any ;
  currentdesc: any ;
  currentmodel: any;

  showformodel1:boolean = false;

  showformodel: boolean = false;
  showformacadd: boolean = false;
  showforrsn: boolean = false;
  showforNewDesc: boolean = false;
  showLocation: boolean = false;

  showSearch: boolean = false;
  currentMacOrPhone = '';

  isButtonVisible = true;
  isSpinnerVisible= false; 	
  
  reqno:any;

  isEntryForm = false;	
  isReviewForm = true;

  hideBuilding = false;	
  warninginfo=false;
  warninginfosnow=false;
  hideSteps = false;
  errorinfo=false;
  cache_tmp:  any = [];
  newModel: any = "";
  newMacAddress: any = "";
  newDescription: any = "";
  reasonForUpdate: any = "";
  FixedPhoneData: any = [];
  state: any = "";
 
  

  showerrormessage = false
  hideNextButton = true

  payload : fixedphone_update = new fixedphone_update();
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
    phoneNunmer:"",
    newModel: "",
    newMac:"",
    Currentdescription :"",
    location_final:""
  }
  
  constructor(private db2:Db2Service, private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location,private servicesd : TranslateConfigService) { }

  onSearch(){
    this.showerrormessage = false;
    this.hideSteps = false;
  }

  onMacClick(){
    this.showerrormessage = false;
    this.hideSteps = false;
  }

  OnSearchClick(){

    if(this.currentMacOrPhone != ''){

      this.db2.search_db2(this.cnum,"fixedphone_search",this.currentMacOrPhone.toUpperCase(),this.currentMacOrPhone,this.countrydetails.name).subscribe(data =>{
        if(data.message != '')
        {
          
          this.currentMac = data.message[0].ATTRIBUTE1;
          this.currentPhone = data.message[0].IDENTIFIER;
          this.currentdesc = data.message[0].ATTRIBUTE4;
          this.currentmodel = data.message[0].ATTRIBUTE2;
          this.currentMac = this.currentMac.substring(3,this.currentMac.length);
          this.showSearch =true;
          this.showerrormessage = false;
          this.hideNextButton = false
          this.hideSteps = false;

        }
        else
        {
          this.showerrormessage = true;
          this.showSearch = false;
          this.hideSteps = true;
          this.hideNextButton = true

        }
        this.getFixedPhoneData()
      });

    }
    else{
      alert("Please provide the MAC address or phone number being updated.");
    }
    

  }

  updateFor(device:string) {
    
    // if(device != ''){
    //   this.hideDeviceSection = false;
    // }
    if(device == ''){
      this.showformodel = false;
      this.showformacadd = false;
      this.showforrsn = false;
      this.showforNewDesc = false;
      this.showLocation = false;
      this.hideBuilding = false;
    }
    if(device.toUpperCase() == 'REPLACE THE HARDPHONE ONLY') {
      
      this.showformodel = true;
      this.showformacadd = true;
      this.showforrsn = true;
      this.showforNewDesc = false;
      this.showLocation = false;
      this.hideBuilding = false;

    }
    if(device.toUpperCase() == 'DESCRIPTION ONLY') {
      this.showforNewDesc = true;
      this.showforrsn = true;
      this.showformodel = false;
      this.showformacadd = false;
      this.showformodel1 = false;
      this.showLocation = false;
      this.hideBuilding = false;


    }
    if(device.toUpperCase() == 'CHANGE PHONE LOCATION') {
      this.showLocation = true;
      this.showforNewDesc = true;
      this.showforrsn = true;
      this.showformodel = false;
      this.showformacadd = false;
      this.showformodel1 = false;
      if(this.state != '') {
        this.hideBuilding = true;
      }
    }
    this.getFixedPhoneData();
  
  }

    // Submit to Snow Jabber new code added by Swarnava ends	
 backClick(formData: NgForm){	
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
      this.hideBuilding = true;	
      var k =0;	
      for(var i=0;i<this.campA.length;i++) {	
      if(loc == this.campA[i]) {        	
      this.build[k] = this.buildA[i];
      k = k+1;	
      }	
      }
             
    } else {	
      this.hideBuilding = false;	
      this.build = [];	
    }	
    this.getFixedPhoneData()
  }

  getFixedPhoneData(){
    this.FixedPhoneData = {
      "showSearch": this.showSearch,
      //"showerrormessage": this.showerrormessage,
      "currentMac": this.currentMac,
      "currentPhone": this.currentPhone,
      "currentmodel": this.currentmodel,
      "currentdesc": this.currentdesc,
      "hideBuilding": this.hideBuilding,
      "hideNextButton":this.hideNextButton
    }
  }

  checkModel(model : any){

    if(model === this.currentmodel){
      alert('You have selected the same model as the current phone model. ');
      this.newModel = ""     
    }

   if(model != ''){
     this.showformodel1  = true;
   }

   else {
     this.showformodel1 = false;
   }
   
  }

  // checkModel(e : any){
  //   alert(e)
  //   alert(this.newModel)
  //   if(e.target.value == this.currentmodel){
  //     alert('Please provide a different Model as the current Model is already '+this.currentmodel );
  //     this.newModel.value = ""
  //     e.target.value = "Select One"
  //   }
  // }

  entryDetails(formData: NgForm){

    var pat1 = /[&\/\\#+()$~%.'":;*? !~`@<>{}g-zG-Z]/g;
    

    if(this.newModel.toUpperCase() =='' || this.newModel.toUpperCase() =='SELECT ONE'){
      this.showformodel1 = false;
            
    }

   if(formData.value.UpdateReq == '') {	
      alert('Please provide the update requirements.');	
    }	

    else if( formData.value.UpdateReq.toLowerCase() == 'replace the hardphone only' && (formData.value.MAC1 == '' || formData.value.MAC1.length != 12)) {	
      alert('Please provide the MAC address (12 character limit).');
    }
    
    else if(formData.value.UpdateReq.toLowerCase() == 'replace the hardphone only' && (pat1.test(formData.value.MAC1))) {
      alert('Please verify the MAC address; only alphanumeric characters (0 to 9 and A to F) are permitted.');
      return;
    }

    else if(formData.value.UpdateReq.toLowerCase() == 'replace the hardphone only' && formData.value.MAC1 == this.currentMac){
      alert('Please verify the MAC address; the information entered is the same as the current MAC address.');
    }

    else if(formData.value.UpdateReq.toLowerCase() != 'replace the hardphone only' && (formData.value.Newdesc.trim() == '' || formData.value.Comments == '/\s/')) {	
      alert('Please provide a new description.');	
      	
    }

    else if(formData.value.UpdateReq.toLowerCase() !== 'replace the hardphone only' && formData.value.Newdesc.trim() == this.currentdesc){
      alert('Please verify the phone description; the information entered is the same as the current phone description.' );
    }

    // else if(this.showformodel == true && formData.value.newModel == this.currentmodel) {
    //   alert(this.mainConfiguration.fixedphonenew.enteranewModel);
    //   return;
    // }

    else if(formData.value.UpdateReq.toLowerCase() == 'change phone location' && formData.value.Location_1_1 == '' && this.showLocation == true) {	
      alert(this.mainConfiguration.alerttranslation.selectlocation);	
    }

    else if(formData.value.UpdateReq.toLowerCase() == 'change phone location' && formData.value.Buildings == '' && this.showLocation == true) {	
      alert('Please select the appropriate campus.');	
    }

    else if(formData.value.Comments.trim() == '' || formData.value.Comments == '/\s/') {	
      alert('Please provide the reason for the update.');	
    }


    else
    {
      if(formData.value.UpdateReq.toUpperCase() == 'DESCRIPTION ONLY') {
        this.reviewDetailsIndia.officeLocation = "";
        this.reviewDetailsIndia.campus = "";
        this.reviewDetailsIndia.location_final = "";
        this.reviewDetailsIndia.newModel = "";
        this.reviewDetailsIndia.newMac = "";
        this.reviewDetailsIndia.description = formData.value.Newdesc;
      } else if(formData.value.UpdateReq.toUpperCase() == 'REPLACE THE HARDPHONE ONLY') {
        this.reviewDetailsIndia.officeLocation = "";
        this.reviewDetailsIndia.campus = "";
        this.reviewDetailsIndia.location_final = "";
        this.reviewDetailsIndia.newModel = formData.value.NewModel;
        this.reviewDetailsIndia.newMac = formData.value.MAC1;
        this.reviewDetailsIndia.description = "";
      } else {
        this.reviewDetailsIndia.officeLocation = formData.value.Location_1_1;
        this.reviewDetailsIndia.campus = this.campus;
        this.reviewDetailsIndia.location_final = "HP"+this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
        this.reviewDetailsIndia.newModel = "";
        this.reviewDetailsIndia.newMac = "";
        this.reviewDetailsIndia.description = formData.value.Newdesc;
      }
      this.isEntryForm = true;	
      this.isReviewForm = false;	

      this.reviewDetailsIndia.mac = this.currentMac;
      this.reviewDetailsIndia.phoneNunmer = this.currentPhone;
      this.reviewDetailsIndia.Currentdescription = this.currentdesc;
      this.reviewDetailsIndia.model = this.currentmodel;
      this.reviewDetailsIndia.device = this.selected_device;
      // this.reviewDetailsIndia.newModel = formData.value.NewModel;
      // this.reviewDetailsIndia.newMac = formData.value.MAC1;
      this.reviewDetailsIndia.justification = formData.value.Comments;
      // this.reviewDetailsIndia.description = formData.value.Newdesc;
      // this.reviewDetailsIndia.officeLocation = formData.value.Location_1_1;
      // this.reviewDetailsIndia.campus = this.campus;
    }
    this.create_cache(formData);
    console.log(formData);
 

  }

  create_cache(formData:NgForm){

    console.log("Starting Cache");
    this.cache.setflag = true;
    this.cache.cnum = this.cnum;
    this.cache.currentMacOrPhone = formData.value.IdNum1;
    this.cache.currentMac = this.currentMac?.trim();
    this.cache.currentPhone = this.currentPhone?.trim();
    this.cache.currentmodel = this.currentmodel?.trim();
    this.cache.currentDescription = this.currentdesc?.trim();
    this.cache.updateRequired = formData.value.UpdateReq;
    this.cache.officeLocation = formData.value.Location_1_1;
    this.cache.campus = formData.value.Buildings;
    this.cache.newModel = formData.value.NewModel;
    this.cache.newMac = formData.value.MAC1;
    this.cache.description = formData.value.Newdesc;
    this.cache.justification = formData.value.Comments;
    this.cache.showSearch = this.showSearch;
    this.cache.hideNextButton = this.hideNextButton;
    //this.cache.showerrormessage = this.showerrormessage;
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
    this.reqno=this.countrydetails.isocode+"-US-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	

      this.payload.Comments_Disp = removeDiacritics(this.reviewDetailsIndia.justification);
      this.payload.Newdesc_Disp = removeDiacritics(this.reviewDetailsIndia.description);
      this.payload.NewModel_Disp = this.reviewDetailsIndia.newModel;
      this.payload.MAC_Disp = this.reviewDetailsIndia.mac;
      this.payload.updatereq_Disp = this.reviewDetailsIndia.device.toLowerCase();
      this.payload.currmodel = this.reviewDetailsIndia.model;
      this.payload.olddesc = this.reviewDetailsIndia.Currentdescription;
      this.payload.Identifier = this.reviewDetailsIndia.phoneNunmer;
      this.payload.MAC = this.reviewDetailsIndia.newMac;
      this.payload.Location_final = "";
      this.payload.LocationCorrectnew = this.reviewDetailsIndia.location_final;
      this.payload.LocationCorrect = this.reviewDetailsIndia.officeLocation;
      this.payload.ReqNo=this.reqno;
      this.payload.ccmail_1= this.countrydetails.ccmail;
      this.payload.Location_Disp = this.reviewDetailsIndia.campus


      this.payload.gvs_approval_link="";
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.evolution_instance=this.countrydetails.evolution_instance;	
      this.payload.request_type='fixedphone_update';

	

    this.servicenowservice.submit_request_fixed_update(this.payload).subscribe(data=> {	
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

  ngOnInit(): void {
    this.mainConfiguration = this.servicesd.readConfigFile();
    this.updateRequiredFor = sessionStorage.getItem('updaterequired');
    this.updateRequiredFor = JSON.parse(this.updateRequiredFor).split(",");
    this.models = sessionStorage.getItem('fpumodels');
    this.models = JSON.parse(this.models).split(",");
    //this.models.unshift('Select One')

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

    // this.reqFor = sessionStorage.getItem('radioAction')
    
    // this.models = sessionStorage.getItem('fpumodels')
    // this.servicesData = servicesData.data[0];
    this.reqFor = sessionStorage.getItem('radioAction');
    this.servicesData = servicesData.data[0]

    if(this.showerrormessage){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }


     //load cache data for entry details form. -- START
     this.cache_tmp=sessionStorage.getItem('cache')	
     console.log(this.cache_tmp);
     this.cache_disp=JSON.parse(this.cache_tmp);
     if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='fixedphone_update')){
       this.currentMacOrPhone = String(this.cache_disp.currentMacOrPhone);
       this.showSearch = Boolean(this.cache_disp.showSearch);
       this.hideNextButton = Boolean(this.cache_disp.hideNextButton);
       //this.showerrormessage = Boolean(this.cache_disp.showerrormessage);
       this.currentMac = String(this.cache_disp.currentMac);
       this.currentPhone = String(this.cache_disp.currentPhone);
       this.currentmodel = String(this.cache_disp.currentmodel);
       this.currentdesc = String(this.cache_disp.currentDescription);
       if(this.cache_disp.updateRequired != undefined) {
        this.selected_device = String(this.cache_disp.updateRequired);
        this.updateFor(this.selected_device);
       }
       if(this.cache_disp.officeLocation != undefined)
       this.state = String(this.cache_disp.officeLocation);
       this.selectedLocation(this.state);
       if((this.cache_disp.officeLocation == undefined) || (this.cache_disp.officeLocation=='') || (this.cache_disp.officeLocation.toUpperCase()== 'SELECT OFFICE LOCATION')) {
        this.hideBuilding=false;
      }
      else {
        this.hideBuilding=true;
      }
       this.campus = String(this.cache_disp.campus);
       if(this.cache_disp.newModel != undefined)
       this.newModel = this.cache_disp.newModel;
       if(this.cache_disp.newMac != undefined)
       this.newMacAddress = this.cache_disp.newMac;
       if(this.cache_disp.description != undefined)
       
       this.newDescription = String(this.cache_disp.description);
       if(this.cache_disp.justification != undefined)
       this.reasonForUpdate = String(this.cache_disp.justification);
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
