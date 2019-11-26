import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-watchlist-match',
  templateUrl: './watchlist-match.component.html',
  styleUrls: ['./watchlist-match.component.scss']
})
export class WatchlistMatchComponent implements OnInit {

  @Input() watchlist:string;
  @Input() team1:string;
  @Input() team2:string;
  @Input() time:string;
  @Input() text1:string;
  @Input() text2:string;

  constructor() { }

  ngOnInit() {
  }

}
