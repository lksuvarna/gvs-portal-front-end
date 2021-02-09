import { Component, OnInit } from '@angular/core';
import { ConnectCucdmService } from './../../demo.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private Service: ConnectCucdmService,private cookie: CookieHandlerService) { }
  res_rec ='';
  fullName='';

  generate(cnum : string): void{
    console.log(cnum);

    this.Service.getNodes(cnum).subscribe(data=> {
      console.log('Response received', data);
      this.res_rec=data.message;
     });
  }
  ngOnInit(): void {
    this.fullName = this.cookie.getCookie('user');
  }

}
