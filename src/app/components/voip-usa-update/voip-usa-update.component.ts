import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Jabber_Update } from 'config/payload';
import {Location} from '@angular/common';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { Db2Service } from '../../_services/db2.service';
import { servicenowservice } from '../../_services/servicenow.service';


@Component({
  selector: 'app-voip-usa-update',
  templateUrl: './voip-usa-update.component.html',
  styleUrls: ['./voip-usa-update.component.css']
})
export class VoipUsaUpdateComponent implements OnInit {
  cloudantData: any = [];
  servicesData: any = [];
  isReviewForm = true;
  isEntryForm = false;
  reqno:any;

  pcode = '';
  service = '';
  reqFor: any;
  ccode='';
  cnum: any;
  orgi:any;	
  countrydetails : any;
  countryname:any;

  sessionwarninginfo:any;
  sessionwarninginfosnow:any;
  warninginfo=false;
  warninginfosnow=false;
  identifier:any;
  Jabber:any = [];
  hideSteps = false
  accountIdDisp:any;
  jabberDisp: any;
  isButtonVisible = true;	
  isSpinnerVisible= false;

  payload : Jabber_Update = new Jabber_Update();


  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private Db2Service: Db2Service,private servicenowservice:servicenowservice,private route: ActivatedRoute) { }

  BackButton() {
    this.isReviewForm = true;
    this.isEntryForm = false;
  }

  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    // this.fixedPhoneIdentifier = false;	
  }

  EntryDetails(formData: NgForm){

    if(formData.value.Jabber_1.toUpperCase() == 'SELECT JABBER NUMBER' || formData.value.Jabber_1 == '') {
      alert('Please select a Jabber number');
      return;
    }
    if(formData.value.accountId.toUpperCase() == '' ||  formData.value.accountId.length < 4) {
      alert('Account ID can not be less than 4 characters');
      return;
    }
    
    this.isReviewForm = false;
    this.isEntryForm = true;
    this.accountIdDisp = formData.value.accountId;
    this.jabberDisp = formData.value.Jabber_1;
  }

  submit_snow(){
    this.reqno=this.countrydetails.isocode+"-US-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
    this.payload.orinator_payload=this.orgi;	
    this.payload.cNum_payload=this.cnum;	
    this.payload.accid_Disp = this.accountIdDisp;
    this.payload.Identifier_Selected = this.jabberDisp;
    this.payload.updated_for = '';

    this.payload.ReqNo=this.reqno;	

    // fields to be picked up from form -- ends	
    this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
    this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
    this.payload.countryname=this.countrydetails.name;	
    this.payload.request_type='jabber_update';	
    this.payload.evolution_instance=this.countrydetails.evolution_instance ;	

    this.servicenowservice.submit_request_update(this.payload).subscribe(data=> {	
      console.log('response', data);	
      if(data)	
      this.router.navigate(['/resultpage'],{ queryParams: { country: this.pcode,service:this.service }}) ;	
      });
  }

  ngOnInit(): void {
    

    // Submit to Snow Jabber Update code
    this.cnum = sessionStorage.getItem('cnum');
    this.orgi = this.cookie.getCookie('ccode');
    this.countrydetails = sessionStorage.getItem('countrydetails');
    this.countrydetails = JSON.parse(this.countrydetails);

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.pcode = params.country;
        this.service = params.service;
        console.log("navigation component" + this.pcode);
    });

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
    }

    const servicesData = { 	
      "data": [	
        {    		
          "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
          "step" : 3,	
          
        }	
      ]	
  
     
    }	

    this.reqFor = sessionStorage.getItem('radioAction');

    if(this.warninginfo || this.warninginfosnow){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }
  }

  // Submit to Snow Jabber new code added by Swarnava ends	
  backClick() {
    sessionStorage.setItem('backbutton', 'yes');
    sessionStorage.setItem('step', 'step1');
    this.location.back();
  }
  btnclick()
  {
    this.getLocationdata();

  }

  getLocationdata() {
    this.cloudantservice.getlocationdetails(this.pcode).subscribe(data => {
      // console.log('Response received navigation', data.flocations);
      console.log('Response received navigation', data.locationdetails.jlocations);
    })
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
