import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voip-in-new',
  templateUrl: './voip-in-new.component.html',
  styleUrls: ['./voip-in-new.component.css']
})
export class VoipInNewComponent implements OnInit {

  Location = [{'Campus':'Select Office Location','Buildings':[]},
    {'Campus':'Banglore','Buildings':['Select One','MTP','SA']},
  {'Campus':'Gurgaon','Buildings':['Select One','DLF Infinity','ASF']}
];
campus:string[] | undefined;
  array = [];
  SelectedLoc: Array<string> = [];
  Banglore = ['Select One','MTP','SA'];
  Gurgaon = ['Select One','DLF Infinity','ASF']; 
  hideDeptCode = true;
  hideBuilding = true;

  constructor() { 
   //alert(this.Location[0].Buildings[2]);
   //alert(this.Location[0].Campus);
  }
  selectedLocation(loc:String) {
    if(loc.toUpperCase() != 'SELECT OFFICE LOCATION') {
      this.hideBuilding = false;
      

    /*  if(loc == this.Campus[0].Banglore) {
        this.array = Object.values(this.Campus[0]);
      }
      else if(this.SelectedLoc == Object.keys(this.Campus[1])) {
        this.SelectedLoc = [...this.Gurgaon];
      }
      else {
        return;
      } */
      for(var i=0;i<this.Location.length;i++) {
        if(loc == this.Location[i].Campus) {
          this.campus = [...this.Location[i].Buildings];
        }
      }
     
    } else {
      this.hideBuilding = true;
    }
  }
  showChargeDepartmentCode() {
    this.hideDeptCode = false;
  }

  hideChargeDepartmentCode() {
    this.hideDeptCode = true;
  }

  entryDetails(formData: NgForm) {
    if(formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {
      alert('Please select the Office Location');
      return;
    }
    if(formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '') {
      alert('Please select the Campus');
      return;
    }
    if(formData.value.Department_number.toUpperCase() == '' && this.hideDeptCode == false) {
      alert('Please enter the Charge Department Code');
      return;
    }
    if(formData.value.Projectid == '') {
      alert('Please enter the Project Id');
      return;
    }
  }

  ngOnInit(): void {
  }
}
