import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-team-logo-heart',
  templateUrl: './team-logo-heart.component.html',
  styleUrls: ['./team-logo-heart.component.scss']
})
export class TeamLogoHeartComponent implements OnInit {

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
