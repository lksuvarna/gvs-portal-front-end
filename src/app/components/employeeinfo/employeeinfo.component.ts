import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {

  constructor() { }

  employeeInfo = {

    employeeName: "Manisha, Kankanampati",
    jobResponsibility: "ServiceNow developer",
    businessUnit: "GBS",
    department: "JDP",
    country: "India",
    email: "Kankanampati.Manisha@ibm.com"
  }

  ngOnInit(): void {
  }

}
