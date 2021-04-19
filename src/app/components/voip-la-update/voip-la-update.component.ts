import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { Db2Service } from '../../_services/db2.service';
import {Jabber_Update} from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-voip-la-update',
  templateUrl: './voip-la-update.component.html',
  styleUrls: ['./voip-la-update.component.css']
})
export class VoipLaUpdateComponent implements OnInit {
  countryname:any;
  ccode='';
  cloudantData: any = [];
  servicesData: any = [];
  Jabber:any = [];
  voice_mail : any =[];
  cos : any =[];
  itns:any = [];
  vm :any;
  css :any;
  Jabber_Identifier:any;
  selected = true;
  hideChargeDept = true;
  currentcos=true;
  currentVoiceMail = true;
  updaterequested=true;
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  jabberDisp:any;
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
  index:any;
  toup_disp : any;
  toup_disp2 : any;
  cos_disp : any;
  vm_disp : any;
  bj_disp : any;
  classOfService : any =[];
  checked : any=false;
  checked2 : any=false;
  newvoicemail = true;
  newcos = true;
  businessJust= true;
  new_cos_disp : any;
  new_vm_disp :any;
  Voice_Mail : any="";
  errorinfo=false;
  selectcos="";
  
 
  businessjustification : any="";


  payload : Jabber_Update = new Jabber_Update();

  toggle_options(){
    if (this.checked){
    this.newvoicemail=false;
    this.toup_disp="Voice Mail";
    }
    else{
    this.newvoicemail=true;
    this.toup_disp='';
    }

    if (this.checked2){
    this.newcos=false;
    this.toup_disp2="Class of Service (COS)";
     }
    else{
      this.newcos=true;
      this.businessJust=true;
      this.toup_disp2='';
    }
  }

  hidebusinessjust(e : any){
    this.businessjustification='';
   if((e.target.value != "") && (e.target.value.toUpperCase() =="INTERNATIONAL"))
   this.businessJust= false;
   else
   this.businessJust= true;

  }
 SelectedJabber(jabber:any) {
   if((jabber != "")){
     this.hideChargeDept = false;
     this.currentVoiceMail=false;
     this.currentcos=false;
     this.updaterequested=false;
     this.index = this.Jabber.indexOf(jabber);
     console.log("Selected ITN index: "+this.index);
     this.cos_disp=this.cos[this.index];
     this.vm_disp=this.voice_mail[this.index];

    } else {
      this.currentcos=true;
      this.hideChargeDept = true;
      this.newvoicemail= true;
      this.newcos= true;
      this.businessJust=true;
      this.currentVoiceMail=true;
      this.updaterequested=true;
      this.checked=false;
      this.checked2=false;
      this.Voice_Mail='';
      this.selectcos="";
      this.businessjustification='';

   }
  }

 
  EntryDetails(formData: NgForm) {
    if(formData.value.Jabber_1.toUpperCase() == 'SELECT ONE' || formData.value.Jabber_1 == '') {
      alert('Please select the jabber number to update');
      return;
    }
    
    if((this.checked==false)&&(this.checked2==false)) {
      alert('Please select update requrired for');
      return;
    }
      
    if(this.checked) {
      if(formData.value.Voice_Mail =='') {
        alert('Please select New Voice Mail');
        return;
      }
    }

    if(this.checked2) {
      if(formData.value.select_cos.toUpperCase() == 'SELECT CLASS OF SERVICE' || formData.value.select_cos == '') {
        alert('Please select New Class of Service');
        return;
      }
    }
    if((this.checked2)&&(formData.value.select_cos.toUpperCase() == 'INTERNATIONAL') ) {
      if(formData.value.businessjustification == ''){
      alert('Please enter Business Justification');
      return;
      }
    }
    this.jabberDisp = formData.value.Jabber_1;
    this.new_cos_disp=formData.value.select_cos;
    this.new_vm_disp=formData.value.Voice_Mail;
    this.bj_disp=formData.value.businessjustification;
    this.isReviewForm = false;
    this.isEntryForm = true;
  }
  // Submit to Snow Jabber new code added by Swarnava ends	
  backClick() {
    sessionStorage.setItem('backbutton', 'yes');
    sessionStorage.setItem('step', 'step1');
    this.location.back();
    
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
      // fields picked up from form -- begins	
      this.payload.Projectid_Disp = '';
     // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
      this.payload.Department_number_Disp = '';
      this.payload.accid_Disp = '';
      this.payload.Identifier_Selected = this.jabberDisp;
      this.payload.updated_for = '';
      this.payload.ReqNo=this.reqno;
      this.payload.Current_COS=this.cos_disp;
      this.payload.Current_VM=this.vm_disp;
      this.payload.Justification=this.bj_disp;
      this.payload.New_Voice=this.new_vm_disp;
      this.payload.New_COS=this.new_cos_disp
      // fields to be picked up from form -- ends	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_update';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.prov_type=this.countrydetails.provision_type;
      this.payload.updated_for=this.toup_disp+','+this.toup_disp2;
      	
     this.servicenowservice.submit_request_update(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ queryParams: { country: this.pcode,service:this.service }}) ;	
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
      this.css=sessionStorage.getItem('cos');
      this.css=this.css.split(',');
      this.cos=[... this.css];
      this.vm=sessionStorage.getItem('voice_mail');
      this.vm=this.vm.split(',');
      this.voice_mail=[... this.vm];
      this.classOfService=this.countrydetails.cos_type;
     
      console.log("COS " +this.cos);
      console.log("Voice Mail "+ this.voice_mail);
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
