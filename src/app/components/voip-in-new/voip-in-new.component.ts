import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { ActivatedRoute } from '@angular/router';


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

    // Dummy:any = ['any','any1','any2'];

  isEntryForm = false;
  isReviewForm = true;
  Voice_Type = "No";
  reviewDetailsIndia = {

    officeLocation:	"Ahmedabad",
    campus:	"Titanium",
    funded:	"Yes",
    chargeDepartmentCode:	"QADF",
    businessUnit:	"GBS",
    projectId: "ABCDS",
    fixPhoneIdentifier: " "

  }
  
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

    countryname:any;
    ccode='';
    cloudantData: any = []
    servicesData: any = []
    Locations:any ;
    locationlist:any ;
    pcode:any;
    service:any;
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute) { 
    this.Locations = {
      locc : ['Select Office Location~~Select One','Banglore~~MTP','Banglore~~SA',
      'Gurgaon~~DLF Infinity','Gurgaon~~ASF','Hyderabad~~Hitech']
      };
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
  }

  BackButton() {
    this.isEntryForm = false;
    this.isReviewForm = true;
  }


  ngOnInit(): void {
     
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.service=params.service;
      this.pcode = params.country;
      console.log("navigation component" + this.pcode);
    })
    this.locationlist=sessionStorage.getItem('locationdetails')
    console.log(this.locationlist)
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