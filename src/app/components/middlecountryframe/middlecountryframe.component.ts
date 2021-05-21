import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middlecountryframe',
  templateUrl: './middlecountryframe.component.html',
  styleUrls: ['./middlecountryframe.component.css']
})
export class MiddlecountryframeComponent implements OnInit {
  cloudantData: any = []
  servicesData: any = []

  constructor() { }

  ngOnInit(): void {

    this.cloudantData  = {
      "code": "744",
      "name": "India",
      "isocode": "IN",
      "isjabber": true,
      "isfixedphone": false,
      "isfac": true,
      "isspecial": false
    }

    const servicesData = { 
      "data": [
        {    
          "servicestitle" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request"], 
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
