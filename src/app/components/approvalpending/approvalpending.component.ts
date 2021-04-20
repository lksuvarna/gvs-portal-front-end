import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { servicenowservice } from '../../_services/servicenow.service';


@Component({
  selector: 'app-approvalpending',
  templateUrl: './approvalpending.component.html',
  styleUrls: ['./approvalpending.component.css']
})
export class ApprovalpendingComponent implements OnInit {

  empserial:any;
  countrydetails:any;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private servicenowservice: servicenowservice) { }

  pendingRequest:any=[]; 
  cloudantData: any = [];
  servicesData: any = [];
  countryname:any;
  ccode='';
  checked: any=[];
  checkedList:any;
  errorinfo=true;
  search: any = '';

  submit(){
    this.router.navigate(['/employeeinfo']) 
  }

  ngOnInit(): void {

    this.countrydetails = sessionStorage.getItem('countrydetails')
    this.countrydetails = JSON.parse(this.countrydetails)

    console.log(this.countrydetails);

    if(this.countrydetails.testuser)
      {
        this.ccode=this.countrydetails.testuser;
      }
      else{this.ccode = this.cookie.getCookie('ccode');}
 
    this.empserial = this.ccode; 
    this.ccode=this.ccode.substring(6,9);
   
    
      this.servicenowservice.searchsnowcoments(this.empserial, "snow_approve","","").subscribe(data => {
        console.log(' snow response', data.message);
        console.log(' snow response', data.message.length);
        
        if(data.message.length==0)
        this.errorinfo=false;
        else
        this.pendingRequest=data.message;

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
    this.servicesData = servicesData.data[0]
  }


  selectAllcheck()
  {
    for (var i = 0; i < this.pendingRequest.length; i++) {
     this.checked[i]= true ;
    }
    this.getCheckedItemList();
    console.log(this.checkedList);
  }

  process()
  {
    this.getCheckedItemList();
    console.log(this.checkedList);
   
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.pendingRequest.length; i++) {
      if(this.checked[i]==true)
      this.checkedList.push(this.pendingRequest[i]);
   }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  unSelectAllcheck()
  {
    for (var i = 0; i < this.pendingRequest.length; i++) {
      this.checked[i]  = false ;
     }

}

onClickSearch(){
  if (this.search == ''){
    alert('Please enter a serial number or request number to search');
  }
 
  
}

reset(){
 this.search = "";
}
}