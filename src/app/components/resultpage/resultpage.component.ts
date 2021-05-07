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
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]
  
    }
    getPage(){
if(this.service=='jabber_new'){
  this.page='new Jabber';
  return this.page
}
if(this.service=='jabber_delete'){
  this.page='delete Jabber';
  return this.page;
}
if(this.service=='jabber_update'){
  this.page='update Jabber';
  return this.page;
}
if(this.service=='jabber_move'){
  this.page='move Jabber';
  return this.page;
}
if(this.service=='fixedphone_new'){
  this.page='new Fixed Phone';
  return this.page;
}
if(this.service=='fixedphone_update'){
  this.page='update Fixed Phone';
  return this.page;
}
if(this.service=='fixedphone_delete'){
  this.page='delete Fixed Phone';
  return this.page;
}
if(this.service=='fac_deactivate'){
  this.page='deactivate Fac';
  return this.page;
}

    }
  }
