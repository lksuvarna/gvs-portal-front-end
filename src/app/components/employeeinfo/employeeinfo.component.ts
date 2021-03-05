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
  sessionwarninginfo :any;
  sessionwarninginfosnow :any;
  cnum: any;
  backbutton: any;
  step:any;
  service:any;
  isDataLoaded=false
  submit() {
    this.router.navigate(['/entrydetails'],{ queryParams: { country: this.pcode,service:this.service } }) ;
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
      this.service=params.service;
      this.pcode = params.country;
      console.log("navigation component" + this.pcode);
    })

    const servicesData = {
      "data": [
        {
          "lhs": [
            { "name": "Services", "routingname": "/services", "indented": false, "highlighted": false },
            { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },
            { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
          ],
          "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
        }
      ]
    }
    this.cnum = sessionStorage.getItem('cnum') 
    this.servicesData = servicesData.data[0];    
    this.warninginfo = false
    this.warninginfosnow=false
    this.sessionwarninginfo=sessionStorage.getItem('warninginfo')
    this.sessionwarninginfosnow=sessionStorage.getItem('warninginfosnow')
    console.log("from12345"+this.sessionwarninginfo+this.sessionwarninginfosnow)
   if (this.sessionwarninginfo =='true1'){
    this.warninginfo = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }
   else if (this.sessionwarninginfosnow =='true1'){
    this.warninginfosnow = true
    this.identifier=sessionStorage.getItem('identifier')
    this.isDataLoaded=true
   }
  // this.warninginfosnow = true
   this.isDataLoaded=true
   //this.identifier=sessionStorage.getItem('identifier')
    this.employeeInfo1=sessionStorage.getItem('employeeInfo')
    this.employeeInfo=JSON.parse(this.employeeInfo1)
    
    
}}



