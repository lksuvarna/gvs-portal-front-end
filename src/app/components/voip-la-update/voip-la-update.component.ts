import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { Db2Service } from '../../_services/db2.service';
import {Create_Cache_jabber, Jabber_Update} from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { TranslateConfigService } from '../../_services/translate-config.service';


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
  checked =''
  checked2 ='';
  newvoicemail = true;
  newcos = true;
  businessJust= true;
  new_cos_disp : any;
  new_vm_disp :any;
  Voice_Mail : any="";
  errorinfo=false;
  selectcos="";
  cache_tmp:  any = [];
  selected_jabber ="";
  dbdata : any;
  data : any;
  vm_actual: any;
  
  mainConfiguration :any;
  businessjustification : any="";


  payload : Jabber_Update = new Jabber_Update();
  cache : Create_Cache_jabber = new Create_Cache_jabber();
  cache_disp : Create_Cache_jabber = new Create_Cache_jabber();

  toggle_options(){
    if (this.checked){
    this.newvoicemail=false;
    this.toup_disp="Voice Mail";
    }
    else{
      this.toup_disp='';
    this.newvoicemail=true;
    this.toup_disp='';
    }

    if (this.checked2){
    this.newcos=false;
    this.toup_disp2="Class of Service(COS)";
    if(this.selectcos.toUpperCase() =="INTERNATIONAL")
    this.businessJust=false;
    else
    this.businessJust=true;
     }
    else{
      this.newcos=true;
      this.businessJust=true;
      this.toup_disp2='';
      //this.selectcos="";
     
    }
  }

  hidebusinessjust(e : any){
    //this.businessjustification='';
   if((e.target.value != "") && (e.target.value.toUpperCase() =="INTERNATIONAL"))
   this.businessJust= false;
   else
   this.businessJust= true;

  }
 SelectedJabber(jabber:any) {
   jabber=jabber.substring(0,8);
   if((jabber != "")){
     this.hideChargeDept = false;
     this.currentVoiceMail=false;
     this.currentcos=false;
     this.updaterequested=false;
     this.newvoicemail= false;
     this.newcos= false;
     this.businessJust=false;
     this.index = this.Jabber.indexOf(jabber);
     console.log("Selected ITN index: "+this.index);
     this.cos_disp=this.cos[this.index];
     this.vm_disp=this.voice_mail[this.index];
      
     if(this.checked=='')
     this.newvoicemail= true;
     else
     this.newvoicemail= false;
     if(this.checked2==''){
       this.newcos=true;
       this.businessJust=true;
      //  if(this.businessjustification=='')
      //  this.businessJust=true;
      //  else
      //  this.businessJust=false;
     }
     else{
       this.newcos=false;
     //this.businessJust=false;
     if(this.selectcos.toUpperCase() =="INTERNATIONAL")
           this.businessJust=false;
           else
           this.businessJust=true;
     }
     
     

    } else {
      
      this.currentcos=true;
      this.hideChargeDept = true;
      this.newcos= true;
      this.currentVoiceMail=true;
      this.updaterequested=true;
      this.newvoicemail= true 
      this.newcos=true;
      this.businessJust=true;

   }
  }

 
  EntryDetails(formData: NgForm) {
    if(formData.value.Jabber_1.toUpperCase() == 'SELECT ONE' || formData.value.Jabber_1 == '') {
      alert(this.mainConfiguration.otheralerts.selectthejabber);
      return;
    }
    
    if((formData.value.checked=='')&&(formData.value.checked2=='')) {
      alert('Please provide the update requirements.');
      return;
    }
    


    if(this.checked) {
      if(formData.value.Voice_Mail =='') {
        alert('Please select New Voice Mail');
        return;
      }
    }
    
    if(this.vm_disp.toUpperCase()=="YES" ||this.vm_disp.toUpperCase()=="Y")
    this.vm_actual="Yes"

    if(this.vm_disp.toUpperCase()=="NO" ||this.vm_disp.toUpperCase()=="N")
    this.vm_actual="No"

    if((formData.value.Voice_Mail==this.vm_actual)&&(this.checked)){
      alert('Current and New Voice Mail cannot be same');
        return;
    }

    if(this.checked2) {
      if(formData.value.select_cos.toUpperCase() == 'SELECT ONE' || formData.value.select_cos == '') {
        alert('Please select a class of service.');
        return;
      }
    }


    if((formData.value.select_cos.toUpperCase()==this.cos_disp.toUpperCase())&&(this.checked2)){
      alert('Current and New Class of Service cannot be same');
        return;
    }


    if((this.checked2)&&(formData.value.select_cos.toUpperCase() == 'INTERNATIONAL') ) {
      if(formData.value.businessjustification == ''){
      alert('Please enter Business Justification');
      return;
      }
    }

    this.jabberDisp = formData.value.Jabber_1;
    if(this.checked2)
    this.new_cos_disp=formData.value.select_cos;
    else
    this.new_cos_disp='';
    if(this.checked)
    this.new_vm_disp=formData.value.Voice_Mail;
    else
    this.new_vm_disp='';
    if((this.checked2)&&(formData.value.select_cos.toUpperCase()=="INTERNATIONAL"))
    this.bj_disp=formData.value.businessjustification;
    else
    this.bj_disp='';
    this.isReviewForm = false;
    this.isEntryForm = true;
    this.create_cache(formData);
  }

  create_cache(formData:NgForm){

    console.log("Starting Cache");
    this.cache.setflag=true;
    this.cache.cnum=this.cnum;
    this.cache.selected_jabber = formData.value.Jabber_1;
    this.cache.update_vm=this.checked;
    this.cache.update_cos=this.checked2;
    this.cache.voicemail=formData.value.Voice_Mail;
    this.cache.cos=formData.value.select_cos;
    this.cache.businessjustification=formData.value.businessjustification;
    sessionStorage.setItem('cache',JSON.stringify(this.cache));
    console.log("cached");
  }


  // Submit to Snow Jabber new code added by Swarnava ends	
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
      this.payload.Identifier_Selected = this.jabberDisp.substring(0,8);
      this.payload.updated_for = '';
      this.payload.ReqNo=this.reqno;
      this.payload.Current_COS=this.cos_disp;
      this.payload.Current_VM=this.vm_disp;
      this.payload.Justification=this.bj_disp.replace(/[\n\r"+]/g, ' ');
      this.payload.New_Voice=this.new_vm_disp;
      this.payload.New_COS=this.new_cos_disp
      // fields to be picked up from form -- ends	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_update';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.prov_type=this.countrydetails.provision_type;
      if((this.toup_disp!='') && (this.toup_disp2!=''))
      this.payload.updated_for=this.toup_disp+' ; '+this.toup_disp2;
      else if(this.toup_disp!='')
      this.payload.updated_for=this.toup_disp;
      else
      this.payload.updated_for=this.toup_disp2;

      
      	
     this.servicenowservice.submit_request_update(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ skipLocationChange: true , queryParams: { country: this.pcode,service:this.service }}) ;	
     },
     (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.isSpinnerVisible= false; 	
      this.errorinfo=true;
      this.isButtonVisible=false;
    });	
     }	
   
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private Db2Service: Db2Service,private servicenowservice:servicenowservice,private route: ActivatedRoute,private servicesd : TranslateConfigService) {

   }

  ngOnInit(): void {
    this.mainConfiguration = this.servicesd.readConfigFile();
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
      this.identifier = sessionStorage.getItem('update_itn')
      this.identifier = this.identifier.split(',');
      this.Jabber = [...this.identifier];
      this.dbdata=sessionStorage.getItem('identifier');
      console.log(JSON.parse(this.dbdata).identifier);    
      var parsed = JSON.parse(JSON.stringify(JSON.parse(this.dbdata)));
      this.data = parsed;   
      console.log("data of display");
      console.log(this.data);
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
          if((this.cnum===this.cache_disp.cnum) && (this.cache_disp.setflag) && (this.service='jabber_update')){
            this.selected_jabber=String(this.cache_disp.selected_jabber);
            this.SelectedJabber(this.cache_disp.selected_jabber);
            if((this.cache_disp.update_vm=='') || (this.cache_disp.update_vm=='false')){
            this.checked='';
            this.newvoicemail= true 
          }
            else{
            this.checked=String(this.cache_disp.update_vm);
            this.newvoicemail= false 
            }
            if((this.cache_disp.update_cos=='') || (this.cache_disp.update_cos=='false')){
            this.checked2='';
            this.newcos=true;
            this.businessJust=true;
          }
            else{
            this.checked2=String(this.cache_disp.update_cos);
            this.newcos=false;
            }
            this.Voice_Mail=this.cache_disp.voicemail;
            this.selectcos=String(this.cache_disp.cos);
            this.businessjustification=this.cache_disp.businessjustification
            if( (this.checked2) && (this.cache_disp.cos.toUpperCase() =="INTERNATIONAL"))
            this.businessJust=false;
            else
            this.businessJust=true;
              console.log("cache restored ");
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
