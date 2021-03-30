import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gvs-portal-front-end';
  display:any;
  curl:any;
  service:any;
  pagedisplay:any;
  constructor(private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {    
    this.route.queryParams
      .subscribe(params => {
        this.service = params.service;
        this.display=true;
        this.pagedisplay= sessionStorage.getItem('pagedisplay')
  //alert(window.location.href)
 //this.curl=window.location.href
 this.curl=sessionStorage.getItem('pagedisplay')
  if(this.curl.includes('pagenotfound')){
    this.display=false;
  }
  
})
}}
