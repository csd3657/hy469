import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-specific-team-news',
  templateUrl: './specific-team-news.component.html',
  styleUrls: ['./specific-team-news.component.scss']
})
export class SpecificTeamNewsComponent implements OnInit {

  private heart:string;

  constructor() {
    this.heart= this.heart="../../../../assets/images/Empty_heart.png";
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


}
