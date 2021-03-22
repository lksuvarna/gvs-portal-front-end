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
    serviceName:this.page,
    serviceNumber:sessionStorage.getItem('reqno')
  }
    const servicesData = { 
    "data": [
      {    
        "lhs": [
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": false}, 
          {"name" : "Jabber","routingname":"/services", "indented" : true, "highlighted": true},            
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
        ],
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]
  
    }
    getPage(){
if(this.service=='jabber_new'){
  this.page='new Jabber'
}
if(this.service=='jabber_delete'){
  this.page='delete Jabber'
}
    }
  }
  






