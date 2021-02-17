import { Component, OnInit } from '@angular/core';
import { ConnectCucdmService } from './../../demo.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {bpservices} from '../../_services/bp.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private Service: ConnectCucdmService,private cookie: CookieHandlerService,private bpservice :bpservices) { }
  res_rec ='';
  fullName='';
  userDetails:any;
  uname='';

  generate(cnum : string): void{
    console.log(cnum);

    this.Service.getNodes(cnum).subscribe(data=> {
      console.log('Response received', data);
      this.res_rec=data.message;
     });
  }
  ngOnInit(): void {
    //this.userDetails = (this.cookie.getCookie('user'));
    this.fullName=this.cookie.getCookie('user');
    
  }

}
