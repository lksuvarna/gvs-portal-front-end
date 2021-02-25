import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectCucdmService } from './../../demo.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {bpservices} from '../../_services/bp.service';
import { cloudantservice } from '../../_services/cloudant.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchText = '';
  searchItems = [
    {"name" : "India Jabber", "flag" : "././assets/flags/744.png", "url": ""},
    {"name" : "India FAC", "flag" : "././assets/flags/744.png", "url": ""}
  ]
  constructor(private Service: ConnectCucdmService,private cookie: CookieHandlerService,private bpservice :bpservices,private cloudantservice:cloudantservice) { }
  res_rec ='';
  fullName:any
  userDetails:any;
  uname='';
  countryname:any;
  ccode='';

  generate(cnum : string): void{
    console.log(cnum);

    this.Service.getNodes(cnum).subscribe(data=> {
      console.log('Response received', data);
      this.res_rec=data.message;
     });
  }


  storeSearchTerm(searchText:string) {
    sessionStorage.setItem('searchText',searchText)
  }

  ngOnInit(): void {
    //this.userDetails = (this.cookie.getCookie('user'));

    this.fullName=this.cookie.getCookie('user');
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
      let countrydetails=data.countrydetails;
      sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
      sessionStorage.setItem('countryroute', this.ccode);
     });

    
  }

}
