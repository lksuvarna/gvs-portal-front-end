import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  
  constructor(private cloudantservice:cloudantservice, private route: ActivatedRoute) { }
  miccountry=false;
  display=false;
  pcode = '';
  cr:any;
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.pcode = params.country;
        this.cr=sessionStorage.getItem('countryroute')
        
    this.cloudantservice.getcountrydetails('000').subscribe(data=> {
      if(data){}else{this.display=true;}
      if ( this.cr.length===3 && (data.countrydetails.loc.includes(sessionStorage.getItem('countryroute')) || data.countrydetails.loc.includes(this.pcode)) ){
      this.miccountry=true
      this.display=true;
    }
    else{
      this.display=true;
    }
  })
})
  }
  
}
