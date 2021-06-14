import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateConfigService} from '../../_services/translate-config.service';

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
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute,private servicesd : TranslateConfigService) { }

  mainConfiguration :any;
  
  ngOnInit(): void {
    this.mainConfiguration = this.servicesd.readConfigFile();
     
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
  
  this.page=this.mainConfiguration.resultpagetrans.jabbernew;
  return this.page
}
if(this.service=='jabber_delete'){
  this.page=this.mainConfiguration.resultpagetrans.jabberdelete;
  return this.page;
}
if(this.service=='jabber_update'){
  this.page=this.mainConfiguration.resultpagetrans.jabberupdate;
  return this.page;
}
if(this.service=='jabber_move'){
  this.page=this.mainConfiguration.resultpagetrans.jabbermove;
  return this.page;
}
if(this.service=='fixedphone_new'){
  this.page=this.mainConfiguration.resultpagetrans.newfixedphone;
  return this.page;
}
if(this.service=='fixedphone_update'){
  this.page=this.mainConfiguration.resultpagetrans.updatefixedphone;
  return this.page;
}
if(this.service=='fixedphone_delete'){
  this.page=this.mainConfiguration.resultpagetrans.deletefixedphone;
  return this.page;
}
if(this.service=='mobile_new'){
  this.page=this.mainConfiguration.resultpagetrans.newmobile;
  return this.page
}
 if(this.service=='fac_new'){
  this.page=this.mainConfiguration.resultpagetrans.facnew;
  return this.page;
} 
if(this.service=='fac_update'){
  this.page=this.mainConfiguration.resultpagetrans.facupdate;
  return this.page;
} 
if(this.service=='fac_reset'){
  this.page=this.mainConfiguration.resultpagetrans.facreset;
  return this.page;
} 
if(this.service=='fac_delete'){
  this.page=this.mainConfiguration.resultpagetrans.facdelete;
  return this.page;
} 

    }
  }
