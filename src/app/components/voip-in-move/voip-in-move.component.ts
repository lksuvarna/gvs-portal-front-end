import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';	
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from 'src/app/_services/cookie-handler.service';
import { Jabber_New } from '../../../../config/payload';
import { servicenowservice } from '../../_services/servicenow.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-voip-in-move',
  templateUrl: './voip-in-move.component.html',
  styleUrls: ['./voip-in-move.component.css']
})
export class VoipInMoveComponent implements OnInit {
  hideDeptCode: boolean = true;
  jabberNumber = [78979812, 79870945];
  Voice_Type = "No";
  hideBuilding = true;
  displayDiv = false;
  isReviewForm = true;
  isEntryForm = false;
  campA: any = [];
  camp: any = [];
  buildA: any = [];
  build: any = [];
  j = 0;
  countryname: any;
  ccode = '';
  orgi: any;
  cnum: any;
  countrydetails: any;
  isButtonVisible = true;
  isSpinnerVisible = false;
  locationlist: any;
  reqno: any;
  cloudantData: any = [];
  servicesData: any = [];	
  Locations: any;	
  pcode: any;	
  service: any;	
  employeeInfo: any;	
  employeeInfo1: any;	
  campus: any;
  reqFor: any;
  hideProjectId = false;

  payload: Jabber_New = new Jabber_New();
  reviewDetailsIndia = {
    jabberNumbertoMove: "",
    officeLocation: "",
    campus: "",
    funded: "",
    chargeDepartmentCode: "",
    businessUnit: "",
    projectId: "",
    fixPhoneIdentifier: " ",
    Voice_Type_Disp: true,
    icano_Disp: "",
    Location_final: "",
    accid_Disp: "",
    reqno: ""
  }
  backClick(){	
    sessionStorage.setItem('backbutton','yes');	
    sessionStorage.setItem('step','step1');	
    this.location.back();	
  }

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice,private location:Location) {
   /* this.Locations = {
      locc: ['Banglore~~MTP', 'Banglore~~SA',
        'Gurgaon~~DLF Infinity', 'Gurgaon~~ASF', 'Hyderabad~~Hitech', 'Hyderabad~~Hitech2']
    };
    for (var i = 0; i < this.Locations.locc.length; i++) {
      var n = this.Locations.locc[i].indexOf("~")
      this.campA[i] = this.Locations.locc[i].substr(0, n);
      this.buildA[i] = this.Locations.locc[i].substr(n + 2, this.Locations.locc[i].length);
    }
    for (var i = 0; i < this.campA.length; i++) {
      if (this.campA[i] != this.campA[i + 1]) {
        this.camp[this.j] = this.campA[i];
        this.j++;
      }
    }*/
  }

  getjabberNumberVal(jabberNumberVal: string) {
    if (jabberNumberVal != '') {
      this.displayDiv = true;
    }
    else
      this.displayDiv = false;

    //alert(this.displayDiv + this.jabberNumberVal)
  }

  selectedLocation(loc: String) {
    this.build = [];
    this.campus = '';
    if (loc != '') {
      this.hideBuilding = false;
      var k = 0;
      for (var i = 0; i < this.campA.length; i++) {
        if (loc == this.campA[i]) {

          this.build[k] = this.buildA[i];
          k = k + 1;
        }
      }

    } else {
      this.hideBuilding = true;
      this.build = [];
    }
  }
  entryDetailsMove(formData: NgForm) {
    if (formData.value.Identifier_Selected == '') {
      alert('Please select the jabber number to move');
      return;
    }
    if (formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {
      alert('Please select the Office Location');
      return;
    }
    if (formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '') {
      alert('Please select the Campus');
      return;
    }
    if (formData.value.Department_number.toUpperCase() == '' && this.hideDeptCode == false) {
      alert('Please enter the Charge Department Code');
      return;
    }
    if(formData.value.Projectid == '' && this.hideProjectId == false) {
      alert('Please enter the Project Id');
      return;
      }
    if (formData.value.accid == '') {
      alert('Please enter the Account Id');
      return;
    }
    if (formData.value.icano == '') {
      alert('Please enter the ICA Code');
      return;
    }
    this.isEntryForm = true;
    this.isReviewForm = false;
    this.reviewDetailsIndia.jabberNumbertoMove = formData.value.Identifier_Selected;
    this.reviewDetailsIndia.officeLocation = formData.value.Location_1;
    this.reviewDetailsIndia.campus = formData.value.Buildings;
    this.reviewDetailsIndia.funded = this.Voice_Type;
    this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;
    this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;	
    this.reviewDetailsIndia.projectId = formData.value.Projectid;
    this.reviewDetailsIndia.accid_Disp = formData.value.accid;
    this.reviewDetailsIndia.icano_Disp = formData.value.icano;

  }

  BackButton() {
    this.isEntryForm = false;
    this.isReviewForm = true;
  }

  // Submit to Snow Jabber new code added by Swarnava	
  submit_snow() {
    //this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno', this.reqno)
    this.isButtonVisible = false;
    this.isSpinnerVisible = true;
    this.payload.orinator_payload = this.orgi;
    this.payload.cNum_payload = this.cnum;
    // fields picked up from form -- begins	
    this.payload.Buildings_Disp = this.reviewDetailsIndia.campus;
    // by default set to true. below line can be removed if needed.	
    //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
    this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;
    // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
    this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;
    this.payload.BusinessUnit_Disp = this.reviewDetailsIndia.businessUnit;
    this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;
    this.payload.Location_final = this.reviewDetailsIndia.campus;
    //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
    this.payload.ReqNo = this.reqno;

    // fields to be picked up from form -- ends	
    this.payload.level1_japproval = this.countrydetails.level1_japproval;
    this.payload.level2_japproval = this.countrydetails.level2_japproval;
    this.payload.SLA_type = this.countrydetails.SLA_type;
    this.payload.gvs_approval_link = this.countrydetails.gvs_approval_link;
    this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
    this.payload.countryname = this.countrydetails.name;
    this.payload.request_type = 'jabber_new';
    this.payload.evolution_instance = this.countrydetails.evolution_instance;
    this.payload.qag = this.countrydetails.qag;
    this.payload.class_of_serice = this.countrydetails.class_of_serice;
    this.payload.country_code = this.countrydetails.code;
    console.log('Payload');
    //console.log(this.payload);	
    /* this.servicenowservice.submit_new_jabber_request(this.payload).subscribe(data=> {	
     console.log('response', data);	
     if(data)	
     this.router.navigate(['/resultpage'],{ queryParams: { country: this.pcode,service:this.service }}) ;	
     });	*/
  }

  showChargeDepartmentCode() {
    this.hideDeptCode = false;
  }

  hideChargeDepartmentCode() {
    this.hideDeptCode = true;
  }


  ngOnInit(): void {
     // Submit to Snow Jabber new code added by Swarnava	
     this.orgi=this.cookie.getCookie('ccode');	
     this.cnum = sessionStorage.getItem('cnum') ;	
     this.countrydetails = sessionStorage.getItem('countrydetails');	
     this.countrydetails = JSON.parse(this.countrydetails);	
      // Submit to Snow Jabber new code added by Swarnava ends	
        
     this.ccode=this.cookie.getCookie('ccode').substring(6,9);	
     this.route.queryParams	
     .subscribe(params => {	
       console.log(params);	
       this.service=params.service;	
       this.pcode = params.country;	
       console.log("navigation component" + this.pcode);	
     });
     this.locationlist=sessionStorage.getItem('locationdetails')?.replace('"','');
     this.locationlist=this.locationlist?.replace('"','').split(',');	
   
     for (var i = 0; i < this.locationlist.length; i++) {	
       var n = this.locationlist[i].indexOf("~")	
       this.campA[i] = this.locationlist[i].substr(1, n - 1);	
       this.buildA[i] = this.locationlist[i].substring(n + 2, this.locationlist[i].length - 1);	
     }	
     for (var i = 0; i < this.campA.length; i++) {	
       if (this.campA[i] != this.campA[i + 1]) {	
         this.camp[this.j] = this.campA[i];	
         this.j++;	
       }	
     }
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
     this.reqFor = sessionStorage.getItem('radioAction')
     this.servicesData = servicesData.data[0];		
     this.employeeInfo1 = sessionStorage.getItem('employeeInfo')	
     this.employeeInfo = JSON.parse(this.employeeInfo1);	
     if(this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null){
       this.hideProjectId = true;
       }
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