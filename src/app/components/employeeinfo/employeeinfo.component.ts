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
  cloudantData: any = []
  servicesData: any = []
  employeeInfo: any
  employeeInfo1: any
  identifier: any;
  warninginfo = true;
  warninginfosnow = true;
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
<<<<<<< HEAD
    this.router.navigate(['/entrydetails'],{ queryParams: { country: this.pcode } }) ;
=======
    if(this.service=="requests"||this.service=="resources"||this.service=="approvalpending"||this.service=="revalidationpending"){
      this.navpage='/'+this.service}       
      else{this.navpage='/entrydetails';}  
       
    this.router.navigate([this.navpage],{ queryParams: { country: this.pcode,service:this.service } }) ;
>>>>>>> 5d8d42b2864a34f59a9693f42350d5488b79f46e
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
  
      this.pcode = params.country;
      console.log("navigation component" + this.pcode);
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
  // this.warninginfosnow = true
   this.isDataLoaded=true
   //this.identifier=sessionStorage.getItem('identifier')
    this.employeeInfo1=sessionStorage.getItem('employeeInfo')
    this.employeeInfo=JSON.parse(this.employeeInfo1)

    if(this.warninginfo || this.warninginfosnow){
      this.hideSteps = true
    } else {
      this.hideSteps = false
    }

    
}}



