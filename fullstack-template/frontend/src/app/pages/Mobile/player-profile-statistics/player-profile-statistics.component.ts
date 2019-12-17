import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-player-profile-statistics',
  templateUrl: './player-profile-statistics.component.html',
  styleUrls: ['./player-profile-statistics.component.scss']
})
export class PlayerProfileStatisticsComponent implements OnInit {

  private heart:string;
  public hide_the_rest_page = true;
  Categories = ['Games','Points','PIR','Rebounds','Assists','Steals','Turnovers','2 points Field Goal %','3 points Field Goal %','Free Throws %'];
  Numbers =['3','25','13','3','5','2','3','50%','25%','80%'];

  constructor() { this.heart="../../../../assets/images/Empty_heart.png"; }

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
