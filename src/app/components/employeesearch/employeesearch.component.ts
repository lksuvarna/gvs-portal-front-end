import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  constructor() { }

  employeeSearch = {

    employeeName: "Agarwal,Ashima",
    serialNumber: "06521V744"

  }

  ngOnInit(): void {
  }

}
