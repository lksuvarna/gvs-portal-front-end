import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voip-au-new',
  templateUrl: './voip-au-new.component.html',
  styleUrls: ['./voip-au-new.component.css']
})
export class VoipAuNewComponent implements OnInit {

  location = ["Select Office Location","Australian Capital Territory - Canberra", "New South Wales - Baulkham Hill Data Centre",
  "New South Wales - George Street","New South Wales - IBM Centre"];
  
  

  entryDetailsAU(formData: NgForm) {	
      
    if(formData.value.Location.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location == '') {	
      alert('Please select the Office Location');	
      return;	
    }	

  }

  constructor() { }


  ngOnInit(): void {
  }

}
