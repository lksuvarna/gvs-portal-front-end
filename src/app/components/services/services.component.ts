import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  servicesData: any = []

  constructor() { }

  ngOnInit(): void {
    const servicesData = { 
      "data": [
        {    
          "lhs": [
            {"name" : "Services", "indented" : false, "highlighted": true},
            {"name" : "Approvals Pending", "indented" : false, "highlighted": false},
            {"name" : "Revalidation Pending", "indented" : false, "highlighted": false},
            {"name" : "Resources", "indented" : false, "highlighted": false},
            {"name" : "Requests", "indented" : false, "highlighted": false}
          ]
        }
      ]
    }
      
      this.servicesData = servicesData.data[0]
    
  }
}

