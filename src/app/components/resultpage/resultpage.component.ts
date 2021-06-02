import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  countryname:any;
  ccode='';
  cloudantData: any = []
  servicesData: any = []
  pcode = '';
  fullName='';
  service='';
  page:any;
  requestResult:any;
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute) { }


  
  ngOnInit(): void {
     
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.pcode = params.country;
        this.service = params.service;
        console.log("navigation component" + this.pcode);
      })
      this.requestResult =
  {
    serviceName:this.getPage(),
    serviceNumber:sessionStorage.getItem('reqno')
  }
    const servicesData = { 
    "data": [
      {    
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
        
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]
  
    }
    getPage(){
if(this.service=='jabber_new'){
  this.page='for a new IBM Telephone Number (ITN)/Jabber account';
  return this.page
}
if(this.service=='jabber_delete'){
  this.page='to delete an IBM Telephone Number (ITN)/Jabber account';
  return this.page;
}
if(this.service=='jabber_update'){
  this.page='to update an IBM Telephone Number (ITN)/Jabber account';
  return this.page;
}
if(this.service=='jabber_move'){
  this.page='to move an IBM Telephone Number (ITN)/Jabber account';
  return this.page;
}
if(this.service=='fixedphone_new'){
  this.page='for a new Fixed Phone';
  return this.page;
}
if(this.service=='fixedphone_update'){
  this.page='to update Fixed Phone';
  return this.page;
}
if(this.service=='fixedphone_delete'){
  this.page='to delete Fixed Phone';
  return this.page;
}
if(this.service=='mobile_new'){
  this.page='for a new Mobile';
  return this.page
}
 if(this.service=='fac_new'){
  this.page='for a new FAC Code / IDD PIN';
  return this.page;
} 
if(this.service=='fac_update'){
  this.page='to update FAC Code / IDD PIN';
  return this.page;
} 
if(this.service=='fac_reset'){
  this.page='to reset FAC Code / IDD PIN';
  return this.page;
} 
if(this.service=='fac_delete'){
  this.page='to delete FAC Code / IDD PIN';
  return this.page;
} 

    }
  }
