import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Location} from '@angular/common';	
import { Jabber_New } from 'config/payload';

@Component({
  selector: 'app-hp-au-update',
  templateUrl: './hp-au-update.component.html',
  styleUrls: ['./hp-au-update.component.css']
})
export class HpAuUpdateComponent implements OnInit {

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
  errorinfo=false;
  currentMac: string = '20BBC0DD14DB';
  currentPhone: Number = 3413073;
  currentdesc: any = 'testing 123';
  currentmodel: Number= 6961;

  showformodel: boolean = false;
  showformacadd: boolean = false;
  showforrsn: boolean = false;
  showforNewDesc: boolean = false;
  showLocation: boolean = false;

  showSearch: boolean = false;
  currentMacOrPhone = '';

  isButtonVisible = true;
  isSpinnerVisible= false; 	
  

  isEntryForm = false;	
  isReviewForm = true;

  hideBuilding = false;	

  payload : Jabber_New = new Jabber_New();
  
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
  }
  
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { }

  OnSearchClick(){
    
    if(this.currentMacOrPhone != ''){

      this.showSearch =true;

    }
    else{
      alert("Please enter a MAC Address or Phone number to search");
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
    
  
  }

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

  entryDetails(formData: NgForm){
    
    if(formData.value.UpdateReq == '') {	
      alert('Please select update required for');	
    }	

    if(formData.value.MAC1 == '') {	
      alert('Please enter 12 characters MAC address');	
    }

    if(formData.value.Comments == '') {	
      alert('Please provide the reason for updation.');	
      	
    }

    if(formData.value.Newdesc == '') {	
      alert('Please provide the New Description. ');	
      	
    }

    if(formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION') {	
      alert('Please select a location');	
      	
    }

    if(formData.value.Buildings.toUpperCase() == 'SELECT ONE') {	
      alert('Please select a campus');	
      return;	
    }
    

    this.isEntryForm = true;	
    this.isReviewForm = false;	
 

  }

  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;	
   // this.fixedPhoneIdentifier = false;	
  }	

  // Submit to Snow Jabber new code added by Swarnava	
  submit_snow(){

    this.isButtonVisible=false;
    this.isSpinnerVisible=true;	

    //MAKE SURE THE ERROR HANDLE CODE IS ADDED WHEN YOU SUBMIT TO SNOW>

  }

  ngOnInit(): void {
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
            
          "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
          "step" : 3,	
          
        }	
      ]	
  
     
    }	

    // this.reqFor = sessionStorage.getItem('radioAction')
    
    // this.models = sessionStorage.getItem('fpumodels')
    // this.servicesData = servicesData.data[0];
    
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