import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';
import { servicenowservice } from '../../_services/servicenow.service';
import {fixedphone_delete} from '../../../../config/payload';	
import {Location} from '@angular/common';	
import {Db2Service} from '../../_services/db2.service'


@Component({
  selector: 'app-hp-in-delete',
  templateUrl: './hp-in-delete.component.html',
  styleUrls: ['./hp-in-delete.component.css']
})
export class HpInDeleteComponent implements OnInit {
  cloudantData: any = [];
  servicesData: any = [];
  isReviewForm = true;
  isEntryForm = false;
  fixedPhoneIdentifier = false;	
  selectedJabber:any;
  warninginfosnow=false;
  reqFor: any;
  warninginfo=false;
  hideSteps = false
  ccode='';
  sessionwarninginfo:any
  sessionwarninginfosnow:any
  Jabber:any = [];
  identifier:any;
  currentMacOrPhone = '';
  showSearch: boolean = false;
  cnum : any;	
  countrydetails : any;
  currentMac: any;
  currentPhone: any ;
  currentdesc: any ;
  isButtonVisible = true;
  isSpinnerVisible= false; 	
  pcode: any;	
  service: any;
  orgi:any;	
  errorinfo=false;
  reqno:any;



  payload : fixedphone_delete = new fixedphone_delete();

  OnSearchClick(){
    
    if(this.currentMacOrPhone != ''){

      this.db2.search_db2(this.cnum,"fixedphone_search",this.currentMacOrPhone,this.currentMacOrPhone,this.countrydetails.name).subscribe(data =>{
        if(data != null)
        {
          
          this.currentMac = data.message[0].ATTRIBUTE1;
          this.currentPhone = data.message[0].IDENTIFIER;
          this.currentdesc = data.message[0].ATTRIBUTE4;
          this.showSearch = true;
          this.isReviewForm = false;
          this.isEntryForm = true;
        }
        else
        {
          alert("something went wrong");

        }
        
      });

    }
    else{
      alert("Please enter a number to search");
    }
    

  }


  entryDetails(formData: NgForm) {
    if(this.currentMacOrPhone == '')
    {
      // alert("Please give some ");
    }
    // if(formData.value.Jabber_1.toUpperCase() == 'SELECT JABBER NUMBER' || formData.value.Jabber_1 == '') {
    //   alert('Please select the Jabber Number');
    //   return;
    // }
    // this.selectedJabber = formData.value.Jabber_1;
    this.isReviewForm = false;
    this.isEntryForm = true;

  }

  constructor(private db2:Db2Service, private router:Router,private route: ActivatedRoute,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private location:Location,private servicenowservice:servicenowservice) { }

  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;	
    this.fixedPhoneIdentifier = false;	
  }	

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


  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-DS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;

      this.payload.ReqNo=this.reqno;	
      this.payload.Identifier = this.currentPhone;
      this.payload.macaddress = this.currentMac;
      this.payload.olddesc = this.currentdesc;

      this.payload.countryname=this.countrydetails.name;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.request_type='fixedphone_delete';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;
      this.payload.ccmail_1= this.countrydetails.ccmail; 


    this.servicenowservice.submit_request_fixed_delete(this.payload).subscribe(data=> {	
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
    this.sessionwarninginfo=sessionStorage.getItem('warninginfo')
    this.sessionwarninginfosnow=sessionStorage.getItem('warninginfosnow')
    if (this.sessionwarninginfo =='false1'){
      this.warninginfo = true
    }
    else if(this.sessionwarninginfosnow =='true1') {
this.warninginfosnow=true
this.identifier=sessionStorage.getItem('identifier')
    }
    else{
      this.identifier=sessionStorage.getItem('identifier');
      this.identifier = this.identifier.split(',');
      this.Jabber = [...this.identifier];
      //this.Jabber.push(this.identifier)
    }

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