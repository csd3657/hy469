import { HomeRoutingModule } from './../../home/home.routing';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.scss']
})
export class UpcomingMatchComponent implements OnInit {

  watchlist: string = "../../../../assets/images/WatchlistADD.png";
  @Input() team1: string;
  @Input() team2: string;
  @Input() date: string;
  @Input() time: string;


  constructor() { }

  ngOnInit() {
  }

}
