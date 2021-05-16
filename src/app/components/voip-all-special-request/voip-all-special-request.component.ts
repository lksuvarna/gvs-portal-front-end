import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import {Location} from '@angular/common';	
import {Create_Cache_jabber, specialRequest_data, Special_Request} from '../../../../config/payload';	
import { servicenowservice } from '../../_services/servicenow.service';
import { ActivatedRoute } from '@angular/router';	
import { TranslateConfigService} from '../../_services/translate-config.service';


@Component({
  selector: 'app-voip-all-special-request',
  templateUrl: './voip-all-special-request.component.html',
  styleUrls: ['./voip-all-special-request.component.css']
})

export class VoipAllSpecialRequestComponent implements OnInit {

  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  Jabber:any = [];
  selected = true;
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  selectedJabber:any;
  requirements_disp='';
  fl_location_disp: any;
  reqFor: any;
  identifier:any
  countrydetails:any;
  cnum:any;
  orgi:any;
  reqno:any;
  service:any;
  pcode:any
  hideSteps = false
  sessionwarninginfo:any
  sessionwarninginfosnow:any
  isButtonVisible = true;	
  errorinfo=false;
  isSpinnerVisible= false; 
  warninginfo=false;
  warninginfosnow=false;
  warninginfosnowres=false;
  Jabber_number=false;
  cache_tmp:  any = [];
  selected_jabber ="";
  account_id='';
  locationselected='';
  locationlist:any;
  belongsTo:any;
  campA: any = [];	
  camp: any = [];	
  buildA: any = [];	
  build: any = [];	
  j = 0;	
  index!: number;
  msgdis=true;
  fl_location='';
  requirement='';
  data : any;
  dbdata : any;
  others=false;
  defaultlocation=false;
  default_location='';
  la=false;
  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_disp : Create_Cache_jabber = new Create_Cache_jabber();
  payload : Special_Request = new Special_Request();
  

  constructor(private router:Router,private route: ActivatedRoute,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private servicenowservice:servicenowservice,private servicesd : TranslateConfigService) {
    
    //if(this.Jabber[0]=='Select One'){
      //this.selected = true;
   // }
    
  
  }

   
    mainConfiguration :any;

    backClick(formData: NgForm){	
      sessionStorage.setItem('backbutton','yes');	
      sessionStorage.setItem('step','step1');	
     // this.location.back();	
       //set up the cache for form values.
    this.create_cache(formData);
    if(sessionStorage.getItem('radioAction')=='myself'){
      this.router.navigate(['employeesearch'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
    }
    else{
    this.router.navigate(['employeeinfo'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
  }	
    }	

    BackButton() {	
      this.isEntryForm = false;	
      this.isReviewForm = true;	
      this.fixedPhoneIdentifier = false;	
    }	

    toggleOptions(e:any){
      this.index = e.target["selectedIndex"]-1 ;
      if(e.target.value.toUpperCase()=='SELECT ONE' || e.target.value.trim()==''){
        this.fl_location='';
        this.defaultlocation=false;
      }else{
        if(this.data[this.index].ATTRIBUTE7=='' || this.data[this.index].ATTRIBUTE7==null)
        this.default_location=''
        else
        this.default_location=this.data[this.index].ATTRIBUTE7;
        this.defaultlocation=true;
      }

    }

    checkOthers(e:any){
      if(e.target.value.toUpperCase()=='OTHERS')
      this.others=true;
      else
      this.others=false;

    }
  
  entryDetails(formData: NgForm) {
     
    if((this.defaultlocation==false) && (this.la==false)){
    if((formData.value.Location.toUpperCase() == 'SELECT ONE' || formData.value.Location == '') && (this.defaultlocation==false)) {
      alert(this.mainConfiguration.alerttranslation.selectlocation);
      return;
    }
  }

    if(formData.value.requirement.trim() == '') {
      alert("Enter description of requirement");
      return;
    }
  
  
    if((formData.value.Jabber_1!=undefined) && (formData.value.Jabber_1!='')){
    this.selectedJabber = formData.value.Jabber_1.trim();
    this.msgdis=false;
    }else{
      this.selectedJabber='';
      this.msgdis=true
    }
    
    if (this.la==false){
    if(this.defaultlocation==false)
    this.fl_location_disp = formData.value.Location;
    else
    this.fl_location_disp=formData.value.default_location;
    }else{
      this.locationselected='';
     this.default_location='';
    }
    this.requirements_disp = formData.value.requirement;
    this.isReviewForm = false;
    this.isEntryForm = true;
    
     //set up the cache for form values.
     this.create_cache(formData);

  }
 
  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-SS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      this.payload.ReqNo=this.reqno;	
      // fields to be picked up from form -- ends	
      if(this.selectedJabber=='')
      this.payload.Identifier_Disp=this.selectedJabber;	 
      else
      this.payload.Identifier_Disp=this.selectedJabber.substring(0,8);
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='special_request';	
      this.payload.Location_Disp=this.fl_location_disp   
      this.payload.Comments = this.requirements_disp.replace(/[\n\r+]/g, ' ');
      this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
    
      
     // console.log('Payload');	
     // console.log(this.payload);	
     this.servicenowservice.submit_request_special_request(this.payload).subscribe(data=> {	
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
 
     create_cache(formData:NgForm){
      console.log("Starting Cache");
      this.cache.setflag=true;
      this.cache.cnum=this.cnum;
      this.cache.selected_jabber = formData.value.Jabber_1;		
      this.cache.officeLocation =  formData.value.Location;	
      this.cache.campus=formData.value.default_location;
      this.cache.businessjustification = formData.value.requirement;
      sessionStorage.setItem('cachesp',JSON.stringify(this.cache));
      console.log("cached" + JSON.stringify(this.cache));
    }


  ngOnInit(): void {
    this.mainConfiguration = this.servicesd.readConfigFile();
    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
    })	
     // Submit to Snow Jabber new code added by Swarnava	
     this.orgi=this.cookie.getCookie('ccode');	
     this.cnum = sessionStorage.getItem('cnum') ;	
     this.countrydetails = sessionStorage.getItem('countrydetails');	
     this.countrydetails = JSON.parse(this.countrydetails);	
      // Submit to Snow Jabber new code added by Swarnava ends	
        
     this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.sessionwarninginfo=sessionStorage.getItem('warninginfo');
    this.sessionwarninginfosnow=sessionStorage.getItem('warninginfosnow');
    if (this.sessionwarninginfo =='false1'){
      this.warninginfosnowres = true  
     
     }

     this.locationlist=sessionStorage.getItem('locationdetails')?.replace('"','')	
     this.locationlist=this.locationlist?.replace('"','').split(',');
  
    //   for (var i = 0; i < this.locationlist.length; i++) {	
    //    var n = this.locationlist[i].indexOf("~")	
    //    this.campA[i] = this.locationlist[i].substr(1, n - 1);	
    //    this.buildA[i] = this.locationlist[i].substring(n + 2, this.locationlist[i].length - 1);	
    //  }	
    //  for (var i = 0; i < this.campA.length; i++) {	
    //    if (this.campA[i] != this.campA[i + 1]) {	
    //      this.camp[this.j] = this.campA[i];	
    //      this.j++;	
    //    }	
    //  }

    // if(this.cnum.substring(6,9)=='897'){
    //   this.locationlist[this.locationlist.length]='Others';
    // }
    	
  
    this.dbdata=sessionStorage.getItem('identifier');
  
    if(this.warninginfosnowres==false){
    console.log(JSON.parse(this.dbdata).identifier);    
    var parsed = JSON.parse(JSON.stringify(JSON.parse(this.dbdata)));
    this.data = parsed;   
    console.log("data of display");
    console.log(this.data);
    this.Jabber_number=true;
    }
    else
    {this.Jabber_number=false;}

   
  const servicesData = { 	
    "data": [	
      {    	
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "step" : 3,	
        
      }	
    ]	

   
  }	
    
    this.servicesData = servicesData.data[0]
    this.reqFor = sessionStorage.getItem('radioAction')

    if(this.warninginfo || this.warninginfosnow){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }

     //load cache data for entry details form. -- START
   this.cache_tmp=sessionStorage.getItem('cachesp')	
   console.log("cached items "+this.cache_tmp);
   this.cache_disp=JSON.parse(this.cache_tmp);
   if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='specialrequest')){
   if((this.cache_disp.selected_jabber==undefined) ||(this.cache_disp.selected_jabber==''))
   this.selected_jabber=''
   else
   this.selected_jabber=String(this.cache_disp.selected_jabber) ;
   
   if(this.cache_disp.officeLocation=='Others'){
   this.others=true; 
  }
    else{
    this.others=false;
    }
    
    if(this.cache_disp.campus=='' || this.cache_disp.campus==undefined){
      this.defaultlocation=false;
      this.default_location='';
      this.locationselected=String(this.cache_disp.officeLocation);
    }else{ 
      this.defaultlocation=true
      this.default_location=String(this.cache_disp.campus);
      this.locationselected='';
    }
    
   
   this.requirement=String(this.cache_disp.businessjustification);
   console.log("cache restored");
   }else{
     //sessionStorage.removeItem('cache');
   }

   //Load Cache ends.
   
  // if(this.countrydetails.name.toUpperCase().trim()=='LATIN AMERICA'){
  //    this.la=false;
  //    this.locationselected='';
  //    this.default_location='';
  //   }else{
  //     this.la=true;
  //   }
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
