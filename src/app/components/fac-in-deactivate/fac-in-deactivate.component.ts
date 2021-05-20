import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import {Fac_Delete} from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Db2Service } from '../../_services/db2.service';



@Component({
  selector: 'app-fac-in-deactivate',
  templateUrl: './fac-in-deactivate.component.html',
  styleUrls: ['./fac-in-deactivate.component.css']
})
export class FacInDeactivateComponent implements OnInit {
  build: any = [];
  campus:any;
  hideBuilding = true;
  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  Jabber:any = [];
  Voice_Mail : any="No";
  
  
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  //jabberDisp:any;
  chargeDisp:any;
  reqFor: any;
  employeeSerial = '';
  service = '';
  countryroute:any;
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
  employeeInfo: any;
  employeeInfo1: any;
  business_unit = ''
  authValue = ''

  payload : Fac_Delete = new Fac_Delete();
  db2data: any
  facIn: boolean = false;

  
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

  BackButton() {
    this.isReviewForm = true;
    this.isEntryForm = false;
    
  }

  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-DS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      
      this.payload.ReqNo=this.reqno;
      this.payload.authLevel_final = this.authValue;
      
      this.payload.authLevel = this.currAuthorizationLevel
	      this.payload.business_unit = this.business_unit;
	      this.payload.siteaddress = ''

	      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='fac_delete';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	

     
      
     
      	
     this.servicenowservice.submit_request_fac_delete(this.payload).subscribe(data=> {	
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
   
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private Db2Service: Db2Service,private servicenowservice:servicenowservice,private route: ActivatedRoute) {
    
    }
    ngOnInit(): void {
  
        // Submit to Snow Fac Delete code
    this.cnum = sessionStorage.getItem('cnum');
    this.orgi = this.cookie.getCookie('ccode');
    this.countrydetails = sessionStorage.getItem('countrydetails');
    this.employeeInfo1 = sessionStorage.getItem('employeeInfo')	
    this.employeeInfo = JSON.parse(this.employeeInfo1);	
    this.business_unit =  this.employeeInfo.businessUnit;
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
      
      this.currAuthorizationLevel = this.db2data[0].ATTRIBUTE4
      this.authValue = this.authCalculation(this.currAuthorizationLevel)
      
    }
    this.locationlist=sessionStorage.getItem('locationdetails')?.replace('"','')	
	    this.locationlist=this.locationlist?.replace('"','').split(',');	
           
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
    this.countryroute=sessionStorage.getItem('countryroute')
    if (this.countryroute === '744' || this.countryroute === '652' ) {
      this.facIn = true
    } else {
      this.facIn = false
    }
    
    this.reqFor = sessionStorage.getItem('radioAction');
      this.servicesData = servicesData.data[0]
  
      if(this.warninginfo || this.warninginfosnow){
        this.hideSteps = true
      } else {
        this.hideSteps = false
      }
   
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