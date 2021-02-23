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
  dataNav:any = []

  @Input ('dataNav') dataNavParent : any
  @Input ('cloudantData') cloudantData : any

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

  removeService(service:string){
    this.dataNav.lhs = this.dataNavParent.lhs.filter((item: any)=> item.name !== service)
  }

  removeServices() {
    if(!this.cloudantData.isjabber){
      this.removeService('Jabber')
     } 

    if(!this.cloudantData.isfixedphone){
      this.removeService('Fixed Phone')
    } 

    if(!this.cloudantData.isfac){
     this.removeService('FAC Code')
    } 

    if(!this.cloudantData.isapproval){
      this.removeService('Approvals Pending')
     } 

    if(!this.cloudantData.isreval){
      this.removeService('Revalidation Pending')
     } 
  }


  ngOnInit(): void {

    this.dataNav = this.dataNavParent
    this.removeServices()

  }

}
