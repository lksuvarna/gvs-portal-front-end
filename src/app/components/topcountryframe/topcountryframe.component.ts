import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topcountryframe',
  templateUrl: './topcountryframe.component.html',
  styleUrls: ['./topcountryframe.component.css']
})
export class TopcountryframeComponent implements OnInit {

  constructor(private cloudantservice:cloudantservice,private cookie: CookieHandlerService, private route: ActivatedRoute) { }
  countryname:any;
  ccode='';
  pcode = '';
  pcountrydetails:any
  countryroute:any
  ngOnInit(): void {
   
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.pcode = params.country;
        console.log("topcountry component" + this.pcode);
      
      this.countryroute=sessionStorage.getItem('countryroute')
    this.ccode = this.cookie.getCookie('ccode').substring(6, 9);    
    if (this.pcode== this.countryroute) {
      this.pcountrydetails=sessionStorage.getItem('countrydetails')
            console.log("topcountrysession storageif" + JSON.parse(this.pcountrydetails).code)
      this.countryname = JSON.parse(this.pcountrydetails)
    }
    else{
      console.log("topcountrysession storageelse" + this.pcode)
    this.cloudantservice.getcountrydetails(this.pcode).subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
      sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
      sessionStorage.setItem('countryroute', this.pcode);
     });
    }
  })
  }

}
