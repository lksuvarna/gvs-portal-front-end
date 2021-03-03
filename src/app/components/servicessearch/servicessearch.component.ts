import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicessearch',
  templateUrl: './servicessearch.component.html',
  styleUrls: ['./servicessearch.component.css']
})
export class ServicessearchComponent implements OnInit {
  searchText: any
  searchItems = [
    {"name" : "India Jabber", "flag" : "././assets/flags/744.png", "code": "744"},    
  ]

  constructor() { }

  ngOnInit(): void {
      this.searchText = sessionStorage.getItem('searchText')
  }

}
