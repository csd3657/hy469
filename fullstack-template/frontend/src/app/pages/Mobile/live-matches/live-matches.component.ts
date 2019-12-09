import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mobile-live-matches',
  templateUrl: './live-matches.component.html',
  styleUrls: ['./live-matches.component.scss']
})
export class LiveMatchesComponent implements OnInit {


  @Input() logo1:string;
  @Input() logo2:string;
  @Input() team1:string;
  @Input() team2:string;
  @Input() time:string;
  @Input() score:string;
  constructor() { }

  ngOnInit() {
  }

}
