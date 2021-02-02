import { Component, OnInit } from '@angular/core';
import { ConnectCucdmService } from './../demo.service';
import { sendPost } from '../node';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

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
