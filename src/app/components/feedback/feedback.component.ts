import { Component, OnInit } from '@angular/core';
import {bpservices} from '../../_services/bp.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private bpservice :bpservices) { }
uname ="kk";
  ngOnInit(): void {

    this.bpservice.bpname().subscribe(data=> {
      console.log('Response received', data.username+data.userid);
      this.uname=data.username+data.userid;
     });
      
  }

}
