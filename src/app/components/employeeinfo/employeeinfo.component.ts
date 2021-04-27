import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { Db2Service } from '../../_services/db2.service'
import { servicenowservice } from '../../_services/servicenow.service'
import { bpservices } from '../../_services/bp.service'
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {

  
  constructor(private router: Router, private cookie: CookieHandlerService, private cloudantservice: cloudantservice, private Db2Service: Db2Service, private servicenowservice: servicenowservice, private bpservices: bpservices,private location: Location,private route: ActivatedRoute) { }
  countryname: any;
  ccode = '';
  pcode = '';
  service:any;
  cloudantData: any = []
  servicesData: any = []
  employeeInfo: any
  employeeInfo1: any
  title:any;
  identifier: any;
  identifier1: any;
  warninginfo = true;
  warninginfosnow = true;
  warninginfosnowreq = false;
  warninginfosnowres=false;
  warninginfoothers = false;
  warninginfosnowothers = false;
  warninginfofac = false;

  warninginfofacdeactivate = false;
  warninginfofacdeactivatesnow=false;

  warninginfofacu = false;
  warninginfofacr = false;

  selfinfo = false;
  sessionwarninginfo :any;
  sessionwarninginfosnow :any;
  cnum: any;
  backbutton: any;
  step:any;
  isDataLoaded=false
  reqFor : any
  hideSteps = false
  navpage:any;
  navpage1:any;
  page:any;
  warn = false;

  submit() {
    if(this.service=="requests"||this.service=="resources"||this.service=="approvalpending"||this.service=="revalidationpending"){
      this.navpage='/'+this.service}       
      else{this.navpage=this.navpage;}  
       
    this.router.navigate([this.navpage],{ queryParams: { country: this.pcode,service:this.service } }) ;
  }
  backClick(){
    sessionStorage.setItem('backbutton','yes');
    sessionStorage.setItem('step','step1');
   // this.location.back();
    this.router.navigate(['/employeesearch'],{ queryParams: { country: this.pcode, service: this.service } });
  }
  
  ngOnInit(): void {
    
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.service = params.service;
      this.pcode = params.country;
      console.log("navigation component" + this.pcode);
      this.title=sessionStorage.getItem('title')
      this.navpage=sessionStorage.getItem('navpage')
   
    
    const servicesData = {
      "data": [
        {          
          "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
          "step" : 2,
        }
      ]
    }
    
    this.reqFor = sessionStorage.getItem('radioAction')
    if (sessionStorage.getItem('radioAction')=="myself"){
    this.selfinfo=true;}
    this.cnum = sessionStorage.getItem('cnum') 
    this.servicesData = servicesData.data[0];    
    this.warninginfo = false
    this.warninginfosnow=false
    this.sessionwarninginfo=sessionStorage.getItem('warninginfo')
    this.sessionwarninginfosnow=sessionStorage.getItem('warninginfosnow')
    console.log("from12345"+this.sessionwarninginfo+this.sessionwarninginfosnow)
   if (this.sessionwarninginfo =='true1'&& this.service=="jabber_new"){
    this.warninginfo = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }
   else if (this.sessionwarninginfosnow =='true1' && this.service=="jabber_new"){
    this.warninginfosnow = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }
   else if (this.sessionwarninginfo =='true1'&& this.service=="fac_new"){
    this.warninginfofac = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }

   else if (this.sessionwarninginfo !=='true1'&& this.service=="fac_deactivate"){
    this.warninginfofacdeactivate = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }
   /*else if (this.sessionwarninginfosnow =='true1' && this.service=="fac_deactivate"){
    this.warninginfofacdeactivatesnow = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }*/


   else if (this.sessionwarninginfo =='false1'&& this.service=="fac_update"){
    this.warninginfofacu = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }
   else if (this.sessionwarninginfo =='false1'&& this.service=="fac_reset"){
    this.warninginfofacr = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }

   else if (this.sessionwarninginfosnow =='false1' && this.service=="requests"){
    this.warninginfosnowreq = true    
    this.isDataLoaded=true
   }
   else if (this.sessionwarninginfo =='false1' && this.service=="resources"){
    this.warninginfosnowres = true    
    this.isDataLoaded=true
   }
   else if ( this.service=="jabber_delete" || this.service=="jabber_update"|| this.service=="jabber_move"){
     console.log("deletes"+this.warninginfosnowothers)
     console.log("deletes"+sessionStorage.getItem('warninginfosnow'))
     console.log("deletes"+sessionStorage.getItem('warninginfo'))
     if(this.service == "jabber_delete") {
       this.page = 'delete Jabber';
     } else if(this.service == "jabber_update"){
       this.page = 'update Jabber';
     }else if(this.service == "jabber_move"){
      this.page = 'move Jabber';
    } //else if(this.service == "fac_deactivate"){
      //this.page = 'fac Deactivate';
    //}
     if (this.sessionwarninginfosnow=='true1'){
       this.identifier1=sessionStorage.getItem('identifier1')
      this.warninginfosnowothers = true;   
      this.isDataLoaded=true;
     }
     else if(this.sessionwarninginfo =='false1'){
    this.warninginfoothers = true;   
    this.isDataLoaded=true}
    
   }
   
  // this.warninginfosnow = true
   this.isDataLoaded=true
   //this.identifier=sessionStorage.getItem('identifier')
    this.employeeInfo1=sessionStorage.getItem('employeeInfo')
    this.employeeInfo=JSON.parse(this.employeeInfo1)


    if(this.warninginfo || this.warninginfosnow || this.warninginfosnowres || this.warninginfosnowreq || this.warninginfosnowothers || this.warninginfoothers || this.warninginfofac || this.warninginfofacu || this.warninginfofacr ||this.warninginfofacdeactivatesnow){

      this.hideSteps = true;
      this.warn = true;
    } else {
      this.hideSteps = false
    }

  })  
} 

}



