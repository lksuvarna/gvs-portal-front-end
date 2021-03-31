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
  count:any;
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
 //sessionStorage.setItem('count','0')
  if(this.curl.includes('pagenotfound')){
    this.display=false; }
    else{this.display=true; }
    if (sessionStorage.getItem('count')!=='1' || (this.curl.includes('homepage')&& sessionStorage.getItem('count')!=='1'))  {
    sessionStorage.setItem('count','1')  
    window.location.reload()}
 
  
})
}}
