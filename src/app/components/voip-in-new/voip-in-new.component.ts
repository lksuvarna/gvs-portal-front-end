import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { servicenowservice } from '../../_services/servicenow.service';
import {Jabber_New} from '../../../../config/payload';


@Component({
  selector: 'app-voip-in-new',
  templateUrl: './voip-in-new.component.html',
  styleUrls: ['./voip-in-new.component.css']
})
export class VoipInNewComponent implements OnInit {
  

 
    campA: any = [];
    camp: any = [];
    buildA: any = [];
    build: any = [];
    j = 0;
    countryname:any;
  ccode='';
  orgi:any;
  cnum : any;
  countrydetails : any;
  isButtonVisible = true;
  isSpinnerVisible= false;

    // Dummy:any = ['any','any1','any2'];

  isEntryForm = false;
  isReviewForm = true;
  Voice_Type = "No";
 
  
  // Location = [{'Campus':'Select Office Location','Buildings':[]},
  //   {'Campus':'Banglore','Buildings':['Select One','MTP','SA']},
  //   {'Campus':'Gurgaon','Buildings':['Select One','DLF Infinity','ASF']}
  // ];

  // campus:string[] | undefined;
  //   array = [];
  //   SelectedLoc: Array<string> = [];
  //   Banglore = ['Select One','MTP','SA'];
  //   Gurgaon = ['Select One','DLF Infinity','ASF']; 
    
  hideDeptCode = true;
  hideBuilding = true;

    cloudantData: any = []
    servicesData: any = []
<<<<<<< HEAD
    Locations:any ;
    locationlist:any ;
    pcode:any;
    service:any;
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute) { 
    this.Locations = {
      locc : ['Select Office Location~~Select One','Banglore~~MTP','Banglore~~SA',
      'Gurgaon~~DLF Infinity','Gurgaon~~ASF','Hyderabad~~Hitech']
      };
=======

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private servicenowservice:servicenowservice) { 
    
>>>>>>> 9300ff5cacb4bacc55ea3268057410a0dbb98e71
    for(var i=0;i<this.Locations.locc.length;i++) {
      var n=this.Locations.locc[i].indexOf("~")
      this.campA[i] = this.Locations.locc[i].substr(0,n);
      this.buildA[i] = this.Locations.locc[i].substr(n+2,this.Locations.locc[i].length);
      }
      for (var i=0;i<this.campA.length;i++) {
      if(this.campA[i] !=this.campA[i+1]) {
      this.camp[this.j] = this.campA[i];
      this.j++;
      }
      }
  
  }
  // submit(){
  //   this.router.navigate(['/reviewdetails']) 
  // }

  // Submit to Snow Jabber new code added by Swarnava

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
 // Submit to Snow Jabber new code added by Swarnava ends
  
  selectedLocation(loc:String) {
    
    if(loc.toUpperCase() != 'SELECT OFFICE LOCATION') {
      this.hideBuilding = false;
      var k =0; 

      this.build[k] = this.buildA[0];
      for(var i=0;i<this.campA.length;i++) {
      if(loc == this.campA[i]) {
      this.build[++k] = this.buildA[i];
      }
      }  
    // alert("HIIII"+this.build);
           
    } else {
      this.hideBuilding = true;
    }
  }

  showChargeDepartmentCode() {
    this.hideDeptCode = false;
  }

  hideChargeDepartmentCode() {
    this.hideDeptCode = true;
  }

  entryDetails(formData: NgForm) {
    
    if(formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {
      alert('Please select the Office Location');
      return;
    }
    if(formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '') {
      alert('Please select the Campus');
      return;
    }
    if(formData.value.Department_number.toUpperCase() == '' && this.hideDeptCode == false) {
      alert('Please enter the Charge Department Code');
      return;
    }
    if(formData.value.Projectid == '') {
      alert('Please enter the Project Id');
      return;
    }    

    this.isEntryForm = true;
    this.isReviewForm = false;

    this.reviewDetailsIndia.officeLocation = formData.value.Location_1;
    this.reviewDetailsIndia.campus = formData.value.Buildings;
    this.reviewDetailsIndia.funded = this.Voice_Type;
    this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;
    // this.reviewDetailsIndia.businessUnit = formData.value
    this.reviewDetailsIndia.projectId = formData.value.Projectid;
    this.reviewDetailsIndia.fixPhoneIdentifier = formData.value.identifier_hp;
    this.reviewDetailsIndia.businessUnit=formData.value.businessUnit;
  }

  BackButton() {
    this.isEntryForm = false;
    this.isReviewForm = true;
  }

   // Submit to Snow Jabber new code added by Swarnava
  submit_snow(){
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
      console.log('Payload');
      //console.log(this.payload);
     this.servicenowservice.submit_new_jabber_request(this.payload).subscribe(data=> {
     console.log('response', data);
     if(data)
     this.router.navigate(['/resultpage']) ;
     });
     }
 
 // Submit to Snow Jabber new code added by Swarnava ends

  ngOnInit(): void {

     // Submit to Snow Jabber new code added by Swarnava
    this.orgi=this.cookie.getCookie('ccode');
    this.cnum = sessionStorage.getItem('cnum') ;
    this.countrydetails = sessionStorage.getItem('countrydetails');
    this.countrydetails = JSON.parse(this.countrydetails);
     // Submit to Snow Jabber new code added by Swarnava ends
     
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
<<<<<<< HEAD
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.service=params.service;
      this.pcode = params.country;
      console.log("navigation component" + this.pcode);
    })
    this.locationlist=sessionStorage.getItem('locationdetails')
    console.log(this.locationlist)
=======
    // this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
    //   console.log('Response received', data.countrydetails.name);
    //   this.countryname=data.countrydetails;
    
    // this.cloudantData  = {
    //   "code": this.ccode,
    //   "name": this.countryname.name,
    //   "isocode": this.countryname.isocode,
    //   "isjabber": this.countryname.isjabber,
    //   "isfixedphone": this.countryname.isfixphone,
    //   "isfac": this.countryname.isfac,
    //   "isspecial": this.countryname.isspecial
    // }
    // });
>>>>>>> 9300ff5cacb4bacc55ea3268057410a0dbb98e71
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