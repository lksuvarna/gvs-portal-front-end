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
  warninginfo = true;
  warninginfosnow = true;
  warninginfosnowreq = false;
  warninginfosnowres=false;
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
  submit() {
    if(this.service=="requests"||this.service=="resources"||this.service=="approvalpending"||this.service=="revalidationpending"){
      this.navpage='/'+this.service}       
      else{this.navpage='/entrydetails';}  
       
    this.router.navigate([this.navpage],{ queryParams: { country: this.pcode,service:this.service } }) ;
  }
  backClick(){
    sessionStorage.setItem('backbutton','yes');
    sessionStorage.setItem('step','step1');
    this.location.back();
  }
  
  ngOnInit(): void {
    
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.service = params.service;
      this.pcode = params.country;
      console.log("navigation component" + this.pcode);
      this.getTitle();
    })
    
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
   else if (this.sessionwarninginfosnow =='false1' && this.service=="requests"){
    this.warninginfosnowreq = true    
    this.isDataLoaded=true
   }
   else if (this.sessionwarninginfo =='false1' && this.service=="resources"){
    this.warninginfosnowres = true    
    this.isDataLoaded=true
   }
  // this.warninginfosnow = true
   this.isDataLoaded=true
   //this.identifier=sessionStorage.getItem('identifier')
    this.employeeInfo1=sessionStorage.getItem('employeeInfo')
    this.employeeInfo=JSON.parse(this.employeeInfo1)

    if(this.warninginfo || this.warninginfosnow || this.warninginfosnowres || this.warninginfosnowreq){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }

    
}
getTitle(){
  //for title
  switch (this.service){
    case "jabber_new":
    this.title="Request new Jabber service";
    break;
    case "resources":
      this.title="Resources";
      break;
      case "requests":
        this.title="Requests";
        break;
        case "approvalpending":
        this.title="Approvals";
        break;
    }
    }
}



