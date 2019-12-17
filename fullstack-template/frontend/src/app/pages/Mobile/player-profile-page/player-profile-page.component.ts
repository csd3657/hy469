import { Component, OnInit, Input } from '@angular/core';
import { HeaderTagComponent } from '../header-tag/header-tag.component';

@Component({
  selector: 'ami-fullstack-player-profile-page',
  templateUrl: './player-profile-page.component.html',
  styleUrls: ['./player-profile-page.component.scss']
})
export class PlayerProfilePageComponent implements OnInit {

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


  hide_the_rest() {
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

}
