import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-voip-in-new',
  templateUrl: './voip-in-new.component.html',
  styleUrls: ['./voip-in-new.component.css']
})
export class VoipInNewComponent implements OnInit {

  Location = [{'Campus':'Select Office Location','Buildings':[]},
    {'Campus':'Banglore','Buildings':['Select One','MTP','SA']},
  {'Campus':'Gurgaon','Buildings':['Select One','DLF Infinity','ASF']}
];
campus:string[] | undefined;
  array = [];
  SelectedLoc: Array<string> = [];
  Banglore = ['Select One','MTP','SA'];
  Gurgaon = ['Select One','DLF Infinity','ASF']; 
  hideDeptCode = true;
  hideBuilding = true;
  countryname:any;
  ccode='';
  cloudantData: any = []
  servicesData: any = []
  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice) { 
   //alert(this.Location[0].Buildings[2]);
   //alert(this.Location[0].Campus);
 
  
  }
  submit(){
    this.router.navigate(['/reviewdetails']) 
  }
  selectedLocation(loc:String) {
    if(loc.toUpperCase() != 'SELECT OFFICE LOCATION') {
      this.hideBuilding = false;
      

    /*  if(loc == this.Campus[0].Banglore) {
        this.array = Object.values(this.Campus[0]);
      }
      else if(this.SelectedLoc == Object.keys(this.Campus[1])) {
        this.SelectedLoc = [...this.Gurgaon];
      }
      else {
        return;
      } */
      for(var i=0;i<this.Location.length;i++) {
        if(loc == this.Location[i].Campus) {
          this.campus = [...this.Location[i].Buildings];
        }
      }
     
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
  }

  ngOnInit(): void {
     
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
    
    this.cloudantData  = {
      "code": this.ccode,
      "name": this.countryname.name,
      "isocode": this.countryname.isocode,
      "isjabber": this.countryname.isjabber,
      "isfixedphone": this.countryname.isfixphone,
      "isfac": this.countryname.isfac,
      "isspecial": this.countryname.isspecial
    }
  });
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
  
