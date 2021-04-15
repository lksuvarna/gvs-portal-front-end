import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,NgForm } from '@angular/forms';
import { feedbackModel } from './feedbackModel';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { FeedbackService } from 'src/app/_services/feedback.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  displayFeedbackSuccessMsg:boolean = true;
  textAreaDisplay: boolean = false;
  hiddenOn9n10: boolean = false;
  displayOn9n10: boolean = false;
  radioReview: string = "";
  ccode = '';
  datenumber:number = Date.now();


  feedbackParams: feedbackModel = new feedbackModel();
  countrydetails: any ;

  constructor(private datePipe: DatePipe,private feedbackservice: FeedbackService, private cookie : CookieHandlerService) { }

  radioSelectAction():void {
    this.textAreaDisplay = true;
    if(this.radioReview == "9" || this.radioReview=="10")
    {
      this.displayOn9n10 = true;
      this.hiddenOn9n10 = false;
    }
    else
    {
      this.hiddenOn9n10 = true;
      this.displayOn9n10 = false;
    

    }
  }

  onSubmit(formData: NgForm):void {

    if(this.radioReview == null || this.radioReview == '')
      alert("Please provide Review");
    else
    {
      if(formData.value.feedbackArea.length==0)
      {
      alert("Please provide feedback");
      }
      else if(formData.value.feedbackArea.length < 5)
      {
        alert("Feedback length should be more than 5 characters");
      }
      else{

       
        this.feedbackParams.rating = formData.value.ratingRadio;
        this.feedbackParams.empid = this.ccode;
        this.feedbackParams.review = formData.value.feedbackArea;
        this.feedbackParams.date =  this.datePipe.transform(new Date(), 'dd-MM-yyyy');
        this.feedbackParams.id = "feedback:" + this.ccode + (this.datePipe.transform(new Date(), 'ddMMyyyyHHmmssSSS'));
        this.feedbackParams.country = this.countrydetails.code;
        this.feedbackParams.country = this.countrydetails.name;
        // this.feedbackParams.country = "India";

        console.log(this.feedbackParams);
        this.feedbackservice.savefeedbackResponse(this.feedbackParams).subscribe(data => {
          console.log("saving Data");

          if(data.status == "200")
          {
            console.log("Data saved");
            this.displayFeedbackSuccessMsg = false;
          }
          else{
            console.log("Data Not saved");
            alert("Something Went Wrong please try after sometime!!");
          }
        });
      }
    }
    
  }

  ngOnInit(): void {

    this.ccode = this.cookie.getCookie('ccode');
    this.countrydetails = sessionStorage.getItem('countrydetails');
    this.countrydetails = JSON.parse(this.countrydetails);

  }

}
