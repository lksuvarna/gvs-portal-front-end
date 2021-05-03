import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Jabber_New} from '../../../../config/payload';
import { ActivatedRoute } from '@angular/router';	
import {Router} from  '@angular/router';
import { servicenowservice } from '../../_services/servicenow.service';		

@Component({
  selector: 'app-voip-au-move',
  templateUrl: './voip-au-move.component.html',
  styleUrls: ['./voip-au-move.component.css']
})
export class VoipAuMoveComponent implements OnInit {
  	
  jabberNumber = [78979812, 79870945];
  locations = ['Australian Capital Territory - Canberra','New South Wales - Baulkham Hill Data Centre'];
  servicesData: any = [];
  reqFor: any;
  isEntryForm = false;	
  isReviewForm = true;
  isButtonVisible = true;	
  isSpinnerVisible= false; 
  loc_sel = "Select Location";
  set_value = "Location";
  sel:any;
  cnum : any;	
  reqno:any;	
  orgi:any;
  errorinfo=false;
  countrydetails : any;
  pcode: any;	
  service: any;
  reviewDetailsIndia = {	
    officeLocation:	"",	
    Identifier_Selected:	"",	
    Location_Selected:	"",	
    reqno:""	
  }	
  payload : Jabber_New = new Jabber_New();
  constructor(private router:Router,private route: ActivatedRoute,private servicenowservice:servicenowservice) { }

  getjabberNumberVal(jabberNumberVal: string) {
    //this.loc_sel = "Location";

  }
  entryDetailsMove(formData:NgForm) {
    if(formData.value.Identifier_Selected == '') {
      alert('Please select a Jabber number');
      return;
    }
    if(formData.value.Location_Selected.toUpperCase() == 'SELECT LOCATION') {
      alert('Please select a Location');
      return;
    }
    this.isEntryForm = true;	
    this.isReviewForm = false;	
    
    this.reviewDetailsIndia.Identifier_Selected = formData.value.Identifier_Selected;	
    this.reviewDetailsIndia.Location_Selected = formData.value.Location_Selected;	

  }
  previousStep(event : any){
    this.isEntryForm = false;	
    this.isReviewForm = true;	
  }
  BackButton() {	
    this.isEntryForm = false;	
    this.isReviewForm = true;		
  }	
   // Submit to Snow Jabber new code added by Swarnava	
   submit_snow(){	
    this.reqno=this.countrydetails.isocode+"-NS-"+this.cnum.substr(0,6)+"-"+gettime();	
    sessionStorage.setItem('reqno',this.reqno)	
    this.isButtonVisible=false;	
    this.isSpinnerVisible=true;	
      this.payload.orinator_payload=this.orgi;	
      this.payload.cNum_payload=this.cnum;	
      // fields picked up from form -- begins	
      this.payload.Buildings_Disp=this.reviewDetailsIndia.Identifier_Selected
      // by default set to true. below line can be removed if needed.	
      //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
      this.payload.ReqNo=this.reqno;	
  
      // fields to be picked up from form -- ends	
      this.payload.level1_japproval=this.countrydetails.level1_japproval;	
      this.payload.level2_japproval=this.countrydetails.level2_japproval;	
      this.payload.SLA_type=this.countrydetails.SLA_type;	
      this.payload.gvs_approval_link=this.countrydetails.gvs_approval_link;	
      this.payload.gvs_portal_link=this.countrydetails.gvs_portal_link;	
      this.payload.countryname=this.countrydetails.name;	
      this.payload.request_type='jabber_move';	
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
     this.router.navigate(['/resultpage'],{ skipLocationChange: true , queryParams: { country: this.pcode,service:this.service }}) ;	
     },
     (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.isSpinnerVisible= false; 	
      this.errorinfo=true;
      this.isButtonVisible=true;
    }
     );	
     }	

  ngOnInit(): void {
    const servicesData = { 	
      "data": [	
        {    	
          	
          "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
          "step" : 3,	
          
        }	
      ]	
  
     
    }	
    this.reqFor = sessionStorage.getItem('radioAction')
    this.servicesData = servicesData.data[0];	
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
