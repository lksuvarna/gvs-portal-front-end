import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Jabber_Move} from '../../../../config/payload';
import { ActivatedRoute } from '@angular/router';	
import {Router} from  '@angular/router';
import { servicenowservice } from '../../_services/servicenow.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';		

@Component({
  selector: 'app-voip-au-move',
  templateUrl: './voip-au-move.component.html',
  styleUrls: ['./voip-au-move.component.css']
})
export class VoipAuMoveComponent implements OnInit {
  	
  jabberNumber:any = [];
  locations:any = [];
  servicesData: any = [];
  ccode='';
  reqFor: any;
  isEntryForm = false;	
  isReviewForm = true;
  isButtonVisible = true;	
  isSpinnerVisible= false; 
  loc_sel = "Select Location";
  itn_sel = '';
  set_value = "Location";
  sel:any;
  cnum : any;	
  reqno:any;	
  orgi:any;
  errorinfo=false;
  countrydetails : any;
  pcode: any;	
  service: any;
  sessionwarninginfo:any;
  sessionwarninginfosnow:any;
  warninginfo=false;
  warninginfosnow=false;
  identifier:any;
  countryname:any;
  cloudantData: any = [];
  hideSteps = false;
  profilelocations:any =[];
  profilelocationlists:any = [];
  selectedlocation:any;
  employeeInfo: any;	
  employeeInfo1: any;	
  selectedjabber:any;


  reviewDetailsIndia = {	
    officeLocation:	"",	
    Identifier_Selected:	"",	
    Location_Selected:	"",	
    reqno:"",
    businessUnit:"",
    currentLocation:""
  }	
  payload : Jabber_Move = new Jabber_Move();
  constructor(private router:Router,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private cookie: CookieHandlerService) { }

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
  
  getjabberNumberVal(jabberNumberVal: string) {
    this.loc_sel = 'Select Location';

  }
  getlocation(loc:any){
    loc = loc.substring(3,loc.length);
    if(this.itn_sel != '') {
    for(var j=0;j<this.jabberNumber.length;j++) {
        if(loc == this.profilelocationlists[j]) {
          alert('Sorry, according to our record, you already have a jabber number for the selected location. To keep this number, no further action is needed.');
          this.loc_sel = "Select Location";
        }
    }
  }
  }
  entryDetailsMove(formData:NgForm) {
    if(formData.value.Identifier_Selected == '') {
      alert('Please select a Jabber number');
      return;
    }
    this.selectedjabber = formData.value.Identifier_Selected;
    if(formData.value.Location_Selected.toUpperCase() == 'SELECT LOCATION') {
      alert('Please select a Location');
      return;
    }

    
    this.isEntryForm = true;	
    this.isReviewForm = false;	
    
    this.reviewDetailsIndia.Identifier_Selected = formData.value.Identifier_Selected;	
    this.reviewDetailsIndia.Location_Selected = formData.value.Location_Selected;	
    this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;
    for(var j=0;j<this.jabberNumber.length;j++){
      if(this.selectedjabber == this.jabberNumber[j]) {
        this.reviewDetailsIndia.currentLocation = this.profilelocationlists[j];
      }
    }

  }
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
  }
  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;		
  }	
   // Submit to Snow Jabber new code added by Swarnava	
   submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-MS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      // by default set to true. below line can be removed if needed.	
      this.payload.Voice_Type_Disp = "No";
      this.payload.Projectid_Disp = "";
      this.payload.icano_Disp = '';	
      this.payload.accid_Disp='';
      this.payload.BusinessUnit_Disp = this.reviewDetailsIndia.businessUnit;	
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.level1_japproval=this.countrydetails.level1_japproval;	
      this.payload.level2_japproval=this.countrydetails.level2_japproval;	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_move';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.qag =this.countrydetails.qag ;	
      this.payload.class_of_serice =this.countrydetails.class_of_serice ;	
      this.payload.default_call_permission=this.countrydetails.default_call_permission;
      this.payload.Location_final = this.reviewDetailsIndia.Location_Selected;
      this.payload.correct_location = this.reviewDetailsIndia.Location_Selected;
      this.payload.Site_location= this.reviewDetailsIndia.currentLocation;
      this.payload.Identifier_Disp = this.reviewDetailsIndia.Identifier_Selected;
      
      
     // console.log('Payload');	
     // console.log(this.payload);	
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

  ngOnInit(): void {
     // Submit to Snow Jabber Update code
     this.cnum = sessionStorage.getItem('cnum');
     this.orgi = this.cookie.getCookie('ccode');
     this.countrydetails = sessionStorage.getItem('countrydetails');
     this.countrydetails = JSON.parse(this.countrydetails);
     this.locations=sessionStorage.getItem('locationdetails')?.replace('"','')	
     this.locations=this.locations?.replace('"','').split(',');
 
     this.ccode=this.cookie.getCookie('ccode').substring(6,9);
     this.sessionwarninginfo = sessionStorage.getItem('warninginfo')
     this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow')
     if (this.sessionwarninginfo == 'false1') {
       this.warninginfo = true
     }
     else if (this.sessionwarninginfosnow == 'true1') {
       this.warninginfosnow = true
       this.identifier = sessionStorage.getItem('identifier')
     }
     else {
       this.identifier = sessionStorage.getItem('identifier')
       this.identifier = this.identifier.split(',');
       this.jabberNumber = [...this.identifier];
       this.profilelocations = sessionStorage.getItem('profile_location');
       this.profilelocations = this.profilelocations.split(',');
       this.profilelocationlists = [...this.profilelocations];
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
     
     this.employeeInfo1 = sessionStorage.getItem('employeeInfo')	
     this.employeeInfo = JSON.parse(this.employeeInfo1);
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
