import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  constructor() { }

  requestResult:any =
  {
    serviceName:"new Jabber",
    serviceNumber:"IN-NS-06521V-0028"
  }
  ngOnInit(): void {
  }

}





