import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { cloudantservice } from '../../_services/cloudant.service';	
import { servicenowservice } from '../../_services/servicenow.service';	
import {Location} from '@angular/common';	
import { Jabber_New } from 'config/payload';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voip-emea-new',
  templateUrl: './voip-emea-new.component.html',
  styleUrls: ['./voip-emea-new.component.css']
})
export class VoipEmeaNewComponent implements OnInit {

  payload : Jabber_New = new Jabber_New();
  reviewDetailsIndia = {	
  
    officeLocation:	"",	
    campus:	"",	
    funded:	"",	
    chargeDepartmentCode:	"",	
    businessUnit:	"",	
    projectId: "",	
    fixPhoneIdentifier: " ",	
    Voice_Type_Disp : true,	
    icano_Disp : "",	
    Location_final :"",	
    accid_Disp: "",	
    reqno:""	
  }
  
  officeLocation = ["Select Location","Denmark", "Belgium"]
  cloudantData: any = [];
  servicesData: any = [];
  reqno:any;
  cnum : any;
  countrydetails : any;	
  isButtonVisible = true;	
  isSpinnerVisible= false; 	
  pcode: any;	
  service: any;	
  orgi:any;	
  reqFor: any;

  entryDetailsEMEA(formData: NgForm) {	
      
    if(formData.value.Location.toUpperCase() == 'SELECT LOCATION' || formData.value.Location == '') {	
      alert('Please select the Location');	
      return;	
    }	

  }

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) { }

  backClick(){	
    sessionStorage.setItem('backbutton','yes');	
    sessionStorage.setItem('step','step1');	
    this.location.back();	
  }

  submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.Buildings_Disp=this.reviewDetailsIndia.campus;	
      // by default set to true. below line can be removed if needed.	
      //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
      this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;	
     // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
      this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;	
      this.payload.BusinessUnit_Disp =this.reviewDetailsIndia.businessUnit;	
      this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;	
      this.payload.Location_final =this.reviewDetailsIndia.campus;	
      //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.level1_japproval=this.countrydetails.level1_japproval;	
      this.payload.level2_japproval=this.countrydetails.level2_japproval;	
      this.payload.SLA_type=this.countrydetails.SLA_type;	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_new';	
      this.payload.evolution_instance=this.countrydetails.evolution_instance ;	
      this.payload.qag =this.countrydetails.qag ;	
      this.payload.class_of_serice =this.countrydetails.class_of_serice ;	
      this.payload.country_code = this.countrydetails.code ;	
      this.payload.default_call_permission=this.countrydetails.default_call_permission;
      
     // console.log('Payload');	
     // console.log(this.payload);	
     this.servicenowservice.submit_request(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ queryParams: { country: this.pcode,service:this.service }}) ;	
     });	
     }


  ngOnInit(): void {

    const servicesData = { 	
      "data": [	
        {    	
          "lhs": [	
            {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": false}, 	
            { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },           	
            {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},	
            {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},	
            {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},	
            {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}	
          ],	
          "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
          "step" : 3,	
          
        }	
      ]	
    }
    
    this.servicesData = servicesData.data[0];	
    //this.reviewDetailsIndia.reqno = "IN-NS-" + this.cnum.substring(0, 6) + "-" + (Math.floor(Math.random() * (this.max - this.min)) + this.min);	
    //alert(this.reviewDetailsIndia.reqno);	
    
  }

  
}

function gettime() {	
  var date=new Date();	
  var minutes1='';	
  var seconds1='';  	
  var seconds = date.getSeconds();	
  var minutes = date.getMinutes();  	
  if(minutes < 10) {minutes1='0'+minutes}	
  else{minutes1=''+minutes}	
  if(seconds < 10) {seconds1='0'+seconds}	
  else{seconds1=''+seconds}	
    console.log(minutes1+seconds1)	
  return minutes1+seconds1;	
} 