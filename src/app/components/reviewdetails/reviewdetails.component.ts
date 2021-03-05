import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { servicenowservice } from '../../_services/servicenow.service';
import {Router} from  '@angular/router';
import {Jabber_New} from '../../../../config/payload';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reviewdetails',
  templateUrl: './reviewdetails.component.html',
  styleUrls: ['./reviewdetails.component.css']
})
export class ReviewdetailsComponent implements OnInit {
  countryname:any;
  ccode='';
<<<<<<< HEAD
  cnum : any;
  cloudantData: any = [];
  servicesData: any = [];
  countrydetails : any;
  isButtonVisible = true;
  isSpinnerVisible= false;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private servicenowservice:servicenowservice) { }
  payload : Jabber_New = new Jabber_New();
=======
  cloudantData: any = []
  servicesData: any = []
  countrydetails:any;
  cnum:any
  payload:any
  isButtonVisible:any
  isSpinnerVisible:any
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private servicenowservice:servicenowservice,private location:Location) { }
  backClick(){
    sessionStorage.setItem('backbutton','yes');
    sessionStorage.setItem('step','step1');
   // this.location.back();
   // this.router.navigate(['..']);
  }
  submit(){
    this.servicenowservice.submit_new_jabber_request(this.payload).subscribe(data=> {
    console.log('response', data);
    if(data)
    this.router.navigate(['/resultpage']) ;
    });
    }
>>>>>>> 31f3c6390a2ec486b4c6efd34e59970269b899f5

  reviewDetailsIndia = {

    officeLocation:	"Ahmedabad",
    campus:	"Titanium",
    funded:	"Yes",
    chargeDepartmentCode:	"QADF",
    businessUnit:	"GBS",
    projectId: "ABCDS",
    fixPhoneIdentifier: " ",
    Voice_Type_Disp : true,
    icano_Disp : "disp",
    Location_final :"",
    accid_Disp: "",
    reqno:""
  }
  submit1(){
   this.isButtonVisible=false;
   this.isSpinnerVisible=true;
     this.payload.orinator_payload=this.ccode;
     this.payload.cNum_payload=this.cnum;
     // fields picked up from form -- begins
     this.payload.Buildings_Disp=this.reviewDetailsIndia.campus;
     // by default set to true. below line can be removed if needed.
     this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;
     this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;
     this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;
     this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;
     this.payload.BusinessUnit_Disp =this.reviewDetailsIndia.businessUnit;
     this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;
     this.payload.Location_final =this.reviewDetailsIndia.Location_final;
     this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;
     this.payload.ReqNo=this.reviewDetailsIndia.reqno;
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
     //console.log('Payload');
     //console.log(this.payload);
    this.servicenowservice.submit_new_jabber_request(this.payload).subscribe(data=> {
    console.log('response', data);
    if(data)
    this.router.navigate(['/resultpage']) ;
    });
    }

  

  ngOnInit(): void {
     
    this.ccode=this.cookie.getCookie('ccode');
    this.cnum = sessionStorage.getItem('cnum') ;
    this.countrydetails = sessionStorage.getItem('countrydetails');
    this.countrydetails = JSON.parse(this.countrydetails);

    const servicesData = { 
    "data": [
      {    
        "lhs": [
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": true},            
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
        ],
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "titles": [
          "Terms of use",
          "Useful Information",
          "Please bear in mind the following points when making a request :"
        ],
        "usefulinfotexts": [
          "To make a request the Employee must exist in BluePages (except for cancellation requests).",
          "You must know the IBM serial Number of the person making the request.",
          "Only one request per employee per request type is processed at a time."
        ],
        "termsurl": "https://w3.ibm.com/w3/info_terms_of_use.html"
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]
  
    }
  }
  
