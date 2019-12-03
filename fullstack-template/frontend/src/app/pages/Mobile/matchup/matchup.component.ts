import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mobile-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.scss']
})

export class MatchUpComponent implements OnInit {

  @Input() team_1: String;
  @Input() time: String;
  @Input() team_2: String;

  constructor() { }

  ngOnInit() {
  }

}
