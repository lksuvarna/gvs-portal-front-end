import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  defaultNavClass = 'ds-panel-segment ds-text-uppercase'
  indentNavClass = ' ds-pad-l-2'
  activeNavClass = ' ds-nav-item ds-bg-blue-1'
  selectedItem: any
  onLoad = true

  @Input ('dataNav') dataNav : any

  getNavClass(i:any) {
    if(this.dataNav.lhs[i].indented && this.dataNav.lhs[i].highlighted ){
      if(this.onLoad){
        return this.defaultNavClass + this.indentNavClass + this.activeNavClass
      } else{
        return this.defaultNavClass + this.indentNavClass
      }
    } else if (this.dataNav.lhs[i].indented){
      return this.defaultNavClass + this.indentNavClass
    } else if (this.dataNav.lhs[i].highlighted) {
      if(this.onLoad){
        return this.defaultNavClass + this.activeNavClass
      } else{
        return this.defaultNavClass
      }
    } else {
      return this.defaultNavClass
    }
  }

  getNavActiveClass(i:any) {
    if(this.dataNav.lhs[i].indented){
      return this.defaultNavClass + this.indentNavClass + this.activeNavClass
    } else {
      return this.defaultNavClass + this.activeNavClass
    }
  }

  clickEvent(i: any) {
    this.onLoad = false
    this.selectedItem = i 
  }


  ngOnInit(): void {
  }

}
