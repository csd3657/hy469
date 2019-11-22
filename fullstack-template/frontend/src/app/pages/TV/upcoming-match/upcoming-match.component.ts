import { HomeRoutingModule } from './../../home/home.routing';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.scss']
})
export class UpcomingMatchComponent implements OnInit {
    
    watchlist: string;
    team1:string;
    team2:string;
    date:string;
    time:string;


  constructor(team1:string , team2:string , date:string, time:string) {
    this.watchlist="../../../../assets/images/WatchlistADD.png";
    this.team1=team1;
    this.team2=team2;
    this.date=date;
    this.time=time;

   }

  ngOnInit() {
  }

}
