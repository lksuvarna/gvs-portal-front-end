import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { servicenowservice } from '../../_services/servicenow.service';
import {Router} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { NgForm } from '@angular/forms';
import { removeDiacritics } from 'config/payload';

@Component({
  selector: 'app-approval-single-page',
  templateUrl: './approval-single-page.component.html',
  styleUrls: ['./approval-single-page.component.css']
})
export class ApprovalSinglePageComponent implements OnInit {



  empserial:any;
  countrydetails:any;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { }

  pendingRequest:any=[]; 
  cloudantData: any = [];
  servicesData: any = [];
  countryname:any;
  ccode='';
  pcode: any;	
  service: any;	
  isButtonVisible = true;	
  isSpinnerVisible= false; 	
  errorinfo=false;
  rejectioncomments='';
  request_cnum: any;
  request_name: any;
  request_sysid: any;
  flag: boolean = true;
  reval=false;
  revaldate:any;revalitn:any;revalchanged:any;revalolddept:any;revalnewdept:any
  revaloldmgr:any;revalnewmgr:any;
   

  submit(){
    this.router.navigate(['/employeeinfo']) 
  }

  ngOnInit(): void {

    this.countrydetails = sessionStorage.getItem('countrydetails')
    this.countrydetails = JSON.parse(this.countrydetails)
    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
    })	

   this.request_cnum= sessionStorage.getItem('request_cnum');
   this.request_name= sessionStorage.getItem('request_name');
   this.request_sysid= sessionStorage.getItem('request_sysid');
   if(sessionStorage.getItem('reval')=="reval"){
     this.reval=true ; 
   this.revaldate= sessionStorage.getItem('revaldate');
   this.revalitn= sessionStorage.getItem('revalitn');
   this.revalchanged= sessionStorage.getItem('revalchanged');
   this.revalolddept= sessionStorage.getItem('revalolddept');
   this.revalnewdept= sessionStorage.getItem('revalnewdept');
   this.revaloldmgr= sessionStorage.getItem('revaloldmgr');
   this.revalnewmgr= sessionStorage.getItem('revalnewmgr');
  } 
    this.empserial = this.ccode; 
    this.ccode=this.ccode.substring(6,9);
  const servicesData = {
    "data": [
      {          
        "services": ["Jabber", "Fixed Phone", "FAC Code / IDD PIN", "Special Request"],
        "step" : 3,
      }
    ]
  }
    this.servicesData = servicesData.data[0]
  }

  EntryDetails(formData: NgForm) {

    if(formData.value.rejectioncomments==''){
      alert('Enter rejection comments');
      return;

    }
    alert('Enter rejection comments');
    return
  }
  backClick(){
   if(this.service=='approvalpending')
    this.router.navigate(['/approvalpending'],{  queryParams: { country: this.pcode, service: this.service } });
    else this.router.navigate(['/revalidationpending'],{  queryParams: { country: this.pcode, service: this.service } });
  }
  
  process(action:string, formData : NgForm)
  {
     
    if(action=='approve')
    {
      sessionStorage.setItem('approval_status','approved');	
      this.rejectioncomments='';
      this.flag=true;
    }else{
      if(formData.value.rejectioncomments.trim()==''){
        alert('Enter rejection comments');
        this.flag=false;
      }else
      this.flag=true;
      sessionStorage.setItem('approval_status','rejected');	
    }



    if(this.flag){
      this.isButtonVisible=false;	
      this.isSpinnerVisible=true;	
    this.servicenowservice.approvesnow(this.request_sysid,action,removeDiacritics(this.rejectioncomments)).subscribe(data=> {
      console.log('response', data);
      if(data){		
        this.router.navigate(['/approvalresult'],{ queryParams: { country: this.pcode, service:this.service}}) ;	
      }
    },
      (error) => {                              //Error callback
       console.error('error caught in component'+error);
       this.isSpinnerVisible= false; 	
       this.errorinfo=true;
       this.isButtonVisible=true;
     });

    }
  }

  }



