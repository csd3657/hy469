import { Component, OnInit, Input } from '@angular/core';
import { HeaderTagComponent } from '../header-tag/header-tag.component';
import { SmartSpeakerService } from 'src/app/smart-speaker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-player-profile-page',
  templateUrl: './player-profile-page.component.html',
  styleUrls: ['./player-profile-page.component.scss']
})
export class PlayerProfilePageComponent implements OnInit {

  private heart:string;
  public hide_the_rest_page = true;
  

  constructor(public _smartSpeaker:SmartSpeakerService, public router:Router) { 
    this.heart="../../../../assets/images/Empty_heart.png";
  }

 

  ngOnInit() {
  }

  addToFavourites(){
    if(this.heart==="../../../../assets/images/Full_heart.png"){
      this._smartSpeaker.speak('You do not seem to like Punter. Are you Panathinaikos?', ()=>{
        console.log('speech ended');
        });
      this.heart="../../../../assets/images/Empty_heart.png";
    }else{
      this._smartSpeaker.speak('Punter is one of your favourites', ()=>{
        console.log('speech ended');
        });
     
      this.heart="../../../../assets/images/Full_heart.png";
    }
  }


  hide_the_rest() {
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

}
