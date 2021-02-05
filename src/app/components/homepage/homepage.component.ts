import { Component, OnInit } from '@angular/core';
import { ConnectCucdmService } from './../../demo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private Service: ConnectCucdmService) { }
  res_rec ='';


  generate(cnum : string): void{
    console.log(cnum);

    this.Service.getNodes(cnum).subscribe(data=> {
      console.log('Response received', data);
      this.res_rec=data.message;
     });
  }
  ngOnInit(): void {
  }

}
