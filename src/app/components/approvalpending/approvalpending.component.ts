import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { servicenowservice } from '../../_services/servicenow.service';
import {Router} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	
import { TranslateConfigService } from '../../_services/translate-config.service';


@Component({
  selector: 'app-approvalpending',
  templateUrl: './approvalpending.component.html',
  styleUrls: ['./approvalpending.component.css']
})
export class ApprovalpendingComponent implements OnInit {

  empserial:any;
  countrydetails:any;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location,private servicesd : TranslateConfigService) { }

  pendingRequest:any=[]; 
  pendingRequest_original: any=[];
  cloudantData: any = [];
  servicesData: any = [];
  countryname:any;
  countryroute :any
  ccode='';
  pcode: any;	
  searchresult=false
  service: any;	
  isButtonVisible = true;	
  isSpinnerVisible= false; 	
  checked: any=[];
  checkedList:any;
  errorinfo=true;
  mainConfiguration :any;
  reval=true;
  flag =true;
  search='';
  snowaction:any;

  submit(){
    this.router.navigate(['/employeeinfo']) 
  }

  ngOnInit(): void {
    

    
    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.mainConfiguration = this.servicesd.readConfigFile();
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	
      sessionStorage.setItem('serviceName', this.service);
      this.countryroute=sessionStorage.getItem('countryroute')

      if(this.pcode!== this.countryroute){
  
        this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {            
          
          this.countryname = data.countrydetails;
          sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
          this.countrydetails=JSON.stringify(data.countrydetails);
          this.countrydetails = JSON.parse(this.countrydetails)
          if(this.countrydetails.testuser)
      {
        this.ccode=this.countrydetails.testuser;
      }
      else{this.ccode = this.cookie.getCookie('ccode');}
      this.empserial = this.ccode; 
    this.ccode=this.ccode.substring(6,9);
   
   if(this.service.includes('revalidationpending')){
     this.snowaction='snow_revalidation'
   // this.empserial="467756744";
     this.reval=false;
     sessionStorage.setItem('reval','reval');
    }
     else{
      this.snowaction='snow_approve'
      sessionStorage.setItem('reval','approval');
     }
   
  console.log("CCCODE VALUE= "+ this.ccode) ;

 if(this.countrydetails.homepagecodes){
 if(this.countrydetails.homepagecodes.includes(this.ccode)){
  this.ccode=this.pcode;
 }}
   if(this.pcode == this.ccode){
     
      this.servicenowservice.searchsnowcoments(this.empserial, this.snowaction,"","").subscribe(data => {
        console.log(' snow response', data.message);
        console.log(' snow response', data.message.length);
        
        if(data.message.length==0)
        this.errorinfo=false;
        else{
        this.pendingRequest_original=data.message;
        this.pendingRequest=this.pendingRequest_original;
        }

      });
    }
      else{
        this.errorinfo=false;
      }

      console.log(' snow response', this.pendingRequest);
          })}
          else{
            this.countrydetails = sessionStorage.getItem('countrydetails')
            this.countrydetails = JSON.parse(this.countrydetails)
            if(this.countrydetails.testuser)
      {
        this.ccode=this.countrydetails.testuser;
      }
      else{this.ccode = this.cookie.getCookie('ccode');}
      this.empserial = this.ccode; 
    this.ccode=this.ccode.substring(6,9);
    
   if(this.service.includes('revalidationpending')){
     this.snowaction='snow_revalidation'
   // this.empserial="467756744";
     this.reval=false;
     sessionStorage.setItem('reval','reval');
    }
     else{
      this.snowaction='snow_approve'
      sessionStorage.setItem('reval','approval');
     }
   
  console.log("CCCODE VALUE= "+ this.ccode) ;
 
 if(this.countrydetails.homepagecodes){
  if(this.countrydetails.homepagecodes.includes(this.ccode)){
   this.ccode=this.pcode;
  }}
   if(this.pcode == this.ccode){
    
      this.servicenowservice.searchsnowcoments(this.empserial, this.snowaction,"","").subscribe(data => {
        console.log(' snow response', data.message);
        console.log(' snow response', data.message.length);
        
        if(data.message.length==0)
        this.errorinfo=false;
        else{
        this.pendingRequest_original=data.message;
        this.pendingRequest=this.pendingRequest_original;
        }

      });
    }
      else{
        this.errorinfo=false;
      }

      console.log(' snow response', this.pendingRequest);
          }	

    

   // this.ccode = this.cookie.getCookie('ccode');
 
    
  const servicesData = {
    "data": [
      {          
        "services": ["Jabber", "Fixed Phone", "FAC Code / IDD PIN", "Special Request"],
        "step" : 3,
      }
    ]
  }
    this.servicesData = servicesData.data[0]})
  }


  selectAllcheck()
  {
    for (var i = 0; i < this.pendingRequest.length; i++) {
     this.checked[i]= true ;
    }
    this.getCheckedItemList();
  }

  async process()
  {
    this.getCheckedItemList();
    if(this.checkedList.length==0){
      alert(this.mainConfiguration.approvalpending.Selectrequesttoapprove);
      return ;
    }
    console.log(this.checkedList);
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
    this.flag=false;
      for (var i = 0; i < this.checkedList.length; i++) {
     await this.process2(this.checkedList[i].trim());
        }
        if(this.flag)	{
        sessionStorage.setItem('approval_status',this.mainConfiguration.approvalpending.approved);	
        this.router.navigate(['/approvalresult'],{ skipLocationChange: true ,queryParams: { country: this.pcode, service:this.service}}) ;	
        }else{
          console.log("Nothing");
        }

  }


  process2(sysid:string){
    return new Promise(resolve=>{
      this.servicenowservice.approvesnow(sysid, 'approve','*##*').subscribe(data=> {
        console.log('response', data);
        if(data){	
          console.log("I am here");
          resolve(this.flag=true);
        }
         }); 

  });
}

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.pendingRequest.length; i++) {
      if(this.checked[i]==true)
      this.checkedList.push(this.pendingRequest[i].sys_id);
   }
    this.checkedList = this.checkedList;
  }

  unSelectAllcheck()
  {
    for (var i = 0; i < this.pendingRequest.length; i++) {
      this.checked[i]  = false ;
     }

}

openpage(req:any){

  // alert(req['sysapproval.variables.requested_by.user_name'].replace('-',''));
  // alert(req['sysapproval.variables.requested_by.name']);
  // alert(req.sys_id);
  sessionStorage.setItem('request_cnum',req['sysapproval.variables.requested_by.user_name'].replace('-',''));
  sessionStorage.setItem('request_name',req['sysapproval.variables.requested_by.name']);
  sessionStorage.setItem('request_sysid',req.sys_id);
  sessionStorage.setItem('revaldate',req['sysapproval.variables.call_permission']);
  sessionStorage.setItem('revalitn',req['sysapproval.variables.itn']);
  sessionStorage.setItem('revalchanged',req['sysapproval.variables.ica_code']);
  sessionStorage.setItem('revalolddept',req['sysapproval.variables.Funded']);
  sessionStorage.setItem('revalnewdept',req['sysapproval.variables.charge_dep_code']);
  sessionStorage.setItem('revaloldmgr',req['sysapproval.variables.ITN_Status']);
  sessionStorage.setItem('revalnewmgr',req['sysapproval.variables.account_id']);
  
  this.router.navigate(['/approvalsingle'],{ skipLocationChange: true, queryParams: { country: this.pcode, service:this.service}}) ;
  
}

performsearch(){
  
  const List: any=[]; 
  if(this.search==''){
  alert(this.mainConfiguration.approvalpending.Entersearchtext);
  return;
  }
  
  for (var i = 0; i < this.pendingRequest_original.length; i++) {
    console.log(this.pendingRequest_original[i]['sysapproval.variables.requested_by.user_name'].replace('-',''));
    if((this.search.toUpperCase()===this.pendingRequest_original[i]['sysapproval.variables.requested_by.user_name'].replace('-','').toUpperCase()) || (this.search.toUpperCase() ===this.pendingRequest_original[i]['sysapproval.variables.id'].toUpperCase()))
    List.push(this.pendingRequest_original[i])
   }
  
   this.pendingRequest=List;
   if(this.pendingRequest.length==0){
    this.searchresult=true
   }
   else{
    this.searchresult=false
   }

}

clear()
{
  this.search='';
  this.searchresult=false
  this.pendingRequest=this.pendingRequest_original;
  
}

}