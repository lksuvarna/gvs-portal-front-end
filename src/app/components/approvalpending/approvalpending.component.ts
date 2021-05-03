import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { servicenowservice } from '../../_services/servicenow.service';
import {Router} from  '@angular/router';	
import { ActivatedRoute } from '@angular/router';	
import {Location} from '@angular/common';	


@Component({
  selector: 'app-approvalpending',
  templateUrl: './approvalpending.component.html',
  styleUrls: ['./approvalpending.component.css']
})
export class ApprovalpendingComponent implements OnInit {

  empserial:any;
  countrydetails:any;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { }

  pendingRequest:any=[]; 
  pendingRequest_original: any=[];
  cloudantData: any = [];
  servicesData: any = [];
  countryname:any;
  ccode='';
  pcode: any;	
  service: any;	
  isButtonVisible = true;	
  isSpinnerVisible= false; 	
  checked: any=[];
  checkedList:any;
  errorinfo=true;
  flag =true;
  search='';

  submit(){
    this.router.navigate(['/employeeinfo']) 
  }

  ngOnInit(): void {

    
    this.route.queryParams	
    .subscribe(params => {	
      console.log(params);	
      this.service=params.service;	
      this.pcode = params.country;	
      console.log("navigation component" + this.pcode);	

      if(sessionStorage.getItem('countrydetails')==undefined){
  
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
          })}
          else{
            this.countrydetails = sessionStorage.getItem('countrydetails')
            this.countrydetails = JSON.parse(this.countrydetails)
            if(this.countrydetails.testuser)
      {
        this.ccode=this.countrydetails.testuser;
      }
      else{this.ccode = this.cookie.getCookie('ccode');}
          }	

    

    
 
    this.empserial = this.ccode; 
    this.ccode=this.ccode.substring(6,9);
   
   // this.empserial="467756744";
      this.servicenowservice.searchsnowcoments(this.empserial, "snow_approve","","").subscribe(data => {
        console.log(' snow response', data.message);
        console.log(' snow response', data.message.length);
        
        if(data.message.length==0)
        this.errorinfo=false;
        else{
        this.pendingRequest_original=data.message;
        this.pendingRequest=this.pendingRequest_original;
        }

      });
      console.log(' snow response', this.pendingRequest);
  const servicesData = {
    "data": [
      {          
        "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
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
      alert('Select request to approve');
      return ;
    }
    console.log(this.checkedList);
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
    this.flag=false;
      for (var i = 0; i < this.checkedList.length; i++) {
     await this.process2(this.checkedList[i].trim());
        }
      console.log("exited for");
        if(this.flag)	{
          console.log("I am here3");
        sessionStorage.setItem('approval_status','approved');	
        this.router.navigate(['/approvalresult'],{ queryParams: { country: this.pcode, service:this.service}}) ;	
        }else{
          console.log("I am here4");
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
  this.router.navigate(['/approvalsingle'],{ queryParams: { country: this.pcode, service:this.service}}) ;
  
}

performsearch(){
  
  const List: any=[]; 
  if(this.search==''){
  alert("Enter search text");
  return;
  }
  
  for (var i = 0; i < this.pendingRequest_original.length; i++) {
    console.log(this.pendingRequest_original[i]['sysapproval.variables.requested_by.user_name'].replace('-',''));
    if((this.search.toUpperCase()===this.pendingRequest_original[i]['sysapproval.variables.requested_by.user_name'].replace('-','').toUpperCase()) || (this.search.toUpperCase() ===this.pendingRequest_original[i]['sysapproval.variables.id'].toUpperCase()))
    List.push(this.pendingRequest_original[i])
   }
  
   this.pendingRequest=List;


}

clear()
{
  this.search='';
  this.pendingRequest=this.pendingRequest_original;
  
}

}