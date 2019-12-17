import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-specific-page-team',
  templateUrl: './specific-page-team.component.html',
  styleUrls: ['./specific-page-team.component.scss']
})
export class SpecificPageTeamComponent implements OnInit {

 private heart:string;
 public hide_the_rest_page = true;

  
  constructor() { 
    this.heart="../../../../assets/images/Empty_heart.png";
  }

  ngOnInit() {
  }

  addToFavourites(){
    if(this.heart==="../../../../assets/images/Full_heart.png"){
      this.heart="../../../../assets/images/Empty_heart.png";
    }else{
      this.heart="../../../../assets/images/Full_heart.png";
    }
  }


  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

}
