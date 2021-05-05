import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Location} from '@angular/common';	
import { fixedphone_update} from 'config/payload';
import {Db2Service} from '../../_services/db2.service'

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
  service: any;

  currentMac: string = "";
  currentPhone: any ;
  currentdesc: any ;
  currentmodel: any;

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



  payload : fixedphone_update = new fixedphone_update();
  
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
  
  constructor(private db2:Db2Service, private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { }

  OnSearchClick(){
    
    if(this.currentMacOrPhone != ''){

      this.db2.search_db2(this.cnum,"fixedphone_search",this.currentMacOrPhone,this.currentMacOrPhone,this.countrydetails.name).subscribe(data =>{
        if(data != null)
        {
          
          this.currentMac = data.message[0].ATTRIBUTE1;
          this.currentPhone = data.message[0].IDENTIFIER;
          this.currentdesc = data.message[0].ATTRIBUTE4;
          this.currentmodel = data.message[0].ATTRIBUTE2;
          // console.log(data.message[0].COUNTRY);
          // console.log(data.message[0].ATTRIBUTE1);
          // console.log(data.message[0].IDENTIFIER);
          // console.log( data.message[0].ATTRIBUTE2);
          // console.log(data.message[0].ATTRIBUTE4);
          this.showSearch =true;

        }
        else
        {
          alert("something went wrong");

        }
        
      });

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
backClick(){	
  sessionStorage.setItem('backbutton','yes');	
  sessionStorage.setItem('step','step1');	
  this.location.back();	
  }	

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
    
    if(this.currentMacOrPhone == '')
    {
      // alert("Please give some ");
    }
   else if(formData.value.UpdateReq == '') {	
      alert('Please select update required for');	
    }	

    else if(formData.value.MAC1 == '') {	
      alert('Please enter 12 characters MAC address');
    }

   else if(formData.value.Comments == '') {	
      alert('Please provide the reason for updation.');	
    }

    else if(formData.value.Newdesc == '') {	
      alert('Please provide the New Description. ');	
      	
    }

    else if(formData.value.Location_1 == '' && this.showLocation == true) {	
      alert('Please select a location');	
    }

    else if(formData.value.Buildings == '' && this.showLocation == true) {	
      alert('Please select a campus');	
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
      this.payload.updatereq_Disp = this.reviewDetailsIndia.device.toLowerCase();
      this.payload.currmodel = this.reviewDetailsIndia.model;
      this.payload.olddesc = this.reviewDetailsIndia.Currentdescription;
      this.payload.Identifier = this.reviewDetailsIndia.phoneNunmer;
      this.payload.MAC = this.reviewDetailsIndia.newMac;
      this.payload.Location_final = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
      this.payload.LocationCorrectnew = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;
      this.payload.ReqNo=this.reqno;
      this.payload.Location_Disp = this.reviewDetailsIndia.officeLocation+"~~"+this.reviewDetailsIndia.campus;


      this.payload.gvs_approval_link="";
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.request_type='fixedphone_update';	
      this.payload.ccmail= this.countrydetails.ccmail;

	

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
