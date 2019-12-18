import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-stats-row',
  templateUrl: './stats-row.component.html',
  styleUrls: ['./stats-row.component.scss']
})
export class StatsRowComponent implements OnInit {

  @Input() stats_title: string;
  @Input() stats_team1: string;
  @Input() stats_team2: string;
  constructor() { }

  ngOnInit() {

  }

}
