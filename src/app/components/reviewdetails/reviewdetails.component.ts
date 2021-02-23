import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewdetails',
  templateUrl: './reviewdetails.component.html',
  styleUrls: ['./reviewdetails.component.css']
})
export class ReviewdetailsComponent implements OnInit {

  constructor() { }

  reviewDetailsIndia = {

    officeLocation:	"Ahmedabad",
    campus:	"Titanium",
    funded:	"Yes",
    chargeDepartmentCode:	"QADF",
    businessUnit:	"GBS",
    projectId: "ABCDS",
    fixPhoneIdentifier: " "

  }

  ngOnInit(): void {
  }

}
