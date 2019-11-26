import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-schedule-match',
  templateUrl: './schedule-match.component.html',
  styleUrls: ['./schedule-match.component.scss']
})
export class ScheduleMatchComponent implements OnInit {

  @Input() team1:string
  @Input() team1_text:string
  @Input() team2:string
  @Input() team2_text:string
  @Input() watchlist:string
  @Input() time:string

  constructor() { }

  ngOnInit() {
  }

}
