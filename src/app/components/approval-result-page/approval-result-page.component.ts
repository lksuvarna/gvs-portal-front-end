import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';

@Component({
  selector: 'app-approval-result-page',
  templateUrl: './approval-result-page.component.html',
  styleUrls: ['./approval-result-page.component.css']
})
export class ApprovalResultPageComponent implements OnInit {

  constructor(private cloudantservice:cloudantservice) { }
  status : any;
  cloudantData: any = [];
  servicesData: any = [];

  ngOnInit(): void {
   this.status=sessionStorage.getItem('approval_status') ;	
   const servicesData = { 
    "data": [
      {    
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
        
      }
    ]
  }
    
    this.servicesData = servicesData.data[0];
  
    }

  
}
