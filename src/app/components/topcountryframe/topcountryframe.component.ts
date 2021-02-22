import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';

@Component({
  selector: 'app-topcountryframe',
  templateUrl: './topcountryframe.component.html',
  styleUrls: ['./topcountryframe.component.css']
})
export class TopcountryframeComponent implements OnInit {

  constructor(private cloudantservice:cloudantservice,private cookie: CookieHandlerService,) { }
  countryname:any;
  ccode='';
  ngOnInit(): void {
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
     });
  }

}
