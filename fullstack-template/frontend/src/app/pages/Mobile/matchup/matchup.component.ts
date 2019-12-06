import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mobile-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.scss']
})

export class MatchUpComponent implements OnInit {

  @Input() team1: String;
  @Input() time: String;
  @Input() team2: String;
  @Input() logo1: String;
  @Input() logo2: String;
  constructor() { }

  ngOnInit() {
  }

}
