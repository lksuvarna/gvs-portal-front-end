import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';

@Component({
  selector: 'app-topcountryframe',
  templateUrl: './topcountryframe.component.html',
  styleUrls: ['./topcountryframe.component.css']
})
export class TopcountryframeComponent implements OnInit {

  constructor(private cloudantservice:cloudantservice) { }
  countryname:any;
  ngOnInit(): void {
    this.cloudantservice.getcountrydetails().subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
     });
  }

}
