import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { servicenowservice } from '../../_services/servicenow.service';
import {Router} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	

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
  rejectioncomments:any;
  request_cnum: any;
  request_name: any;
  request_sysid: any;
   

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
   
    this.empserial = this.ccode; 
    this.ccode=this.ccode.substring(6,9);
  const servicesData = {
    "data": [
      {          
        "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
        "step" : 3,
      }
    ]
  }
    this.servicesData = servicesData.data[0]
  }

  process(action:string)
  {
    
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
    if(action=='approve')
    {
      sessionStorage.setItem('approval_status','approved');	
      this.rejectioncomments='';
    }else{
      sessionStorage.setItem('approval_status','rejected');	
    }
    
    this.servicenowservice.approvesnow(this.request_sysid,action,this.rejectioncomments).subscribe(data=> {
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



