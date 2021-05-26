import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Location} from '@angular/common';	
import { fixedphone_update, Create_Cache_fixedphone} from 'config/payload';
import {Db2Service} from '../../_services/db2.service';
import { TranslateConfigService } from '../../_services/translate-config.service';

@Component({
  selector: 'app-hp-emea-update',
  templateUrl: './hp-emea-update.component.html',
  styleUrls: ['./hp-emea-update.component.css']
})
export class HpEmeaUpdateComponent implements OnInit {
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
  service: any;
  mainConfiguration :any;

  currentMac: string = "";
  currentPhone: any ;
  currentdesc: any ;
  currentmodel: any;
  newModel: any = "";
  showformodel: boolean = false;
  showformacadd: boolean = false;
  showforrsn: boolean = false;
  showforNewDesc: boolean = false;
  showLocation: boolean = false;
  modelcheck:boolean=true;

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
  showerrormessage = false;
  cache_tmp:  any = [];
  updateRequired: any = "";
  state: any = "";
  newMacAddress: any = "";
  newDescription: any = "";
  reasonForUpdate: any = "";
  FixedPhoneData: any = [];
  hideNextButton = true;


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
  }
  
  constructor(private db2:Db2Service, private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location,private servicesd : TranslateConfigService) { }
  onSearch(){
    this.showerrormessage = false;
    this.hideSteps = false;
    this.getFixedPhoneData();
  }
  
  OnSearchClick(){
    if(this.currentMacOrPhone != ''){
          this.db2.search_db2(this.cnum,"fixedphone_search",this.currentMacOrPhone,this.currentMacOrPhone,this.countrydetails.name).subscribe(data =>{
        if(data.message != '')
        {
          
          this.currentMac = data.message[0].ATTRIBUTE1;
          this.currentPhone = data.message[0].IDENTIFIER;
          this.currentdesc = data.message[0].ATTRIBUTE2;
          this.currentmodel = data.message[0].ATTRIBUTE4;
          this.currentMac = this.currentMac.substring(3,this.currentMac.length);
          this.showSearch =true;
          this.hideNextButton = false;
          this.showerrormessage = false;

        }else
        {
          this.showerrormessage = true;
          this.showSearch = false;
          this.hideNextButton = true;
          this.hideSteps = true;

        }
        this.getFixedPhoneData();
      });

    }
    else{
      alert(this.mainConfiguration.fixedphonenew.MACAddresssearch);
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
      this.showLocation = false;
      this.hideBuilding = false;

    }
    if(device.toUpperCase() == 'CHANGE PHONE LOCATION') {
      this.showLocation = true;
      this.showforNewDesc = true;
      this.showforrsn = true;
      this.showformodel = false;
      this.showformacadd = false;
    }
    this.getFixedPhoneData();
  
  }

    // Submit to Snow Jabber new code added by Swarnava ends	
backClick(formData: NgForm){	
  sessionStorage.setItem('backbutton','yes');	
  sessionStorage.setItem('step','step1');	
 // this.location.back();	
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
  }
  getFixedPhoneData(){
    this.FixedPhoneData = {
      "showSearch": this.showSearch,
      "showerrormessage": this.showerrormessage,
      "currentMac": this.currentMac,
      "currentPhone": this.currentPhone,
     // "currentloc": this.currentloc,
      "currentdesc": this.currentdesc,
      "hideNextButton":this.hideNextButton,
      "currentmodel" :this.currentmodel
    }
  }
  checkModel(model : string){	
		
    if(model === this.currentmodel){	
      this.newModel='';
      alert('Please provide a different Model as the current Model is already '+this.currentmodel );	
    /*  this.newModel= document.forms[0].model.selectedIndex = 0
      document.forms[0].model.focus();
      this.modelcheck  =false;
      return false; */
    }	
   /*  else{
      return true;
    } */
  }
  entryDetails(formData: NgForm){
    if(formData.value.UpdateReq == '') {	
      alert(this.mainConfiguration.fixedphonenew.updaterequiredfor);	
      return;
    }	

    if(this.showformacadd ==true && (formData.value.MAC1.trim() == '' || formData.value.MAC1.length != 12)) {	
	
      alert(this.mainConfiguration.fixedphonenew.entermacadd);
      return;	
    }
    if(this.showformacadd == true && formData.value.MAC1 == this.currentMac) {
      alert(this.mainConfiguration.fixedphonenew.enternewMACaddress);
      return;
    }
    var pat1 = /[&\/\\#+()$~%.'":;*? !~`@<>{}g-zG-Z]/g;

    if(this.showformacadd == true && (pat1.test(formData.value.MAC1))) {
      alert(this.mainConfiguration.fixedphonenew.MACfieldAtoF);
      return;
    }
    if(this.showformodel == true && formData.value.newModel == this.currentmodel) {
      alert(this.mainConfiguration.fixedphonenew.enteranewModel);
      return;
    }

    if(this.showforNewDesc == true && formData.value.Newdesc.trim() == '') {	
      alert(this.mainConfiguration.fixedphonenew.provideNewDescription);	
      return;
      	
    }
    if(this.showforNewDesc == true && formData.value.Newdesc == this.currentdesc) {
      alert(this.mainConfiguration.fixedphonenew.differentDescriptionasisalready +" "+this.currentdesc+" " +this.mainConfiguration.fixedphonenew.fortheprovidednumber);
      return;
    }
    if(this.showforrsn == true && (formData.value.Comments.trim() == '')) {	
      alert(this.mainConfiguration.fixedphonenew.providethereasonforupdate);	
      return;
    }
    

    else
    {
      this.isEntryForm = true;	
      this.isReviewForm = false;	

      this.reviewDetailsIndia.mac = this.currentMac;
      this.reviewDetailsIndia.phoneNunmer = this.currentPhone;
      this.reviewDetailsIndia.Currentdescription = this.currentdesc;
      this.reviewDetailsIndia.model = this.currentmodel;
      this.reviewDetailsIndia.device = this.selected_device;
      this.reviewDetailsIndia.newModel = formData.value.NewModel;
      this.reviewDetailsIndia.newMac = formData.value.MAC1;
      this.reviewDetailsIndia.justification = formData.value.Comments;
      this.reviewDetailsIndia.description = formData.value.Newdesc;
      this.reviewDetailsIndia.officeLocation = formData.value.Location_1;
      this.reviewDetailsIndia.campus = this.campus;
    }
 
    this.create_cache(formData);
  }
  
  create_cache(formData:NgForm){
	
    console.log("Starting Cache");
    this.cache.setflag = true;
    this.cache.cnum = this.cnum;
    this.cache.currentMacOrPhone = formData.value.IdNum1;
    this.cache.currentMac = this.currentMac?.trim();
    this.cache.currentPhone = this.currentPhone?.trim();
    //this.cache.currentLocation = this.currentloc?.trim();
    this.cache.currentDescription = this.currentdesc?.trim();
    this.cache.currentmodel = this.currentmodel?.trim();
    this.cache.newModel = formData.value.NewModel;
    this.cache.updateRequired = formData.value.UpdateReq;
    this.cache.officeLocation = formData.value.Location_1_1;
    this.cache.campus = formData.value.Buildings;
    this.cache.newMac = formData.value.MAC1;
    this.cache.description = formData.value.Newdesc;
    this.cache.justification = formData.value.Comments;
    this.cache.showSearch = this.showSearch;
    this.cache.showerrormessage = this.showerrormessage;
    this.cache.hideNextButton = this.hideNextButton;
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

      this.payload.Comments_Disp = this.reviewDetailsIndia.justification;
      this.payload.Newdesc_Disp = this.reviewDetailsIndia.description;
      this.payload.NewModel_Disp = this.reviewDetailsIndia.newModel;
      this.payload.MAC_Disp = this.reviewDetailsIndia.mac;
      this.payload.updatereq_Disp = this.reviewDetailsIndia.device;
      this.payload.currmodel = this.reviewDetailsIndia.model;
      this.payload.olddesc = this.reviewDetailsIndia.Currentdescription;
      this.payload.Identifier = this.reviewDetailsIndia.phoneNunmer;
      this.payload.MAC = this.reviewDetailsIndia.newMac;
      this.payload.Location_final = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
      this.payload.LocationCorrectnew = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
      this.payload.ReqNo=this.reqno;
      this.payload.Location_Disp = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;


      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
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
    this.reqFor = sessionStorage.getItem('radioAction');
    this.servicesData = servicesData.data[0]

    if(this.warninginfo || this.warninginfosnow){
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
    this.showerrormessage = Boolean(this.cache_disp.showerrormessage);
    this.currentMac = String(this.cache_disp.currentMac);
    this.currentPhone = String(this.cache_disp.currentPhone);
    //this.currentloc = String(this.cache_disp.currentLocation);
    this.currentmodel = String(this.cache_disp.currentmodel);
    this.currentdesc = String(this.cache_disp.currentDescription);
    if(this.cache_disp.officeLocation != undefined){
      this.updateRequired = String(this.cache_disp.updateRequired);
      this.updateFor(this.updateRequired);
    }
    if(this.cache_disp.officeLocation != undefined) {
      this.state = String(this.cache_disp.officeLocation);
      this.selectedLocation(this.state)
    }
    if(this.cache_disp.campus != undefined)
    this.campus = String(this.cache_disp.campus);
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

