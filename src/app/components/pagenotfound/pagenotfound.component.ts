import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  
  constructor(private cloudantservice:cloudantservice) { }
  miccountry=false;
  display=false;
  ngOnInit(): void {
    this.cloudantservice.getcountrydetails('000').subscribe(data=> {
      if(data){}else{this.display=true;}
      if (data.countrydetails.loc.includes(sessionStorage.getItem('countryroute'))){
      this.miccountry=true
      this.display=true;
    }
    else{
      this.display=true;
    }
  })
  }

}
