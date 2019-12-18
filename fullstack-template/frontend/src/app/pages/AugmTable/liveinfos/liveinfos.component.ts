import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-liveinfos',
  templateUrl: './liveinfos.component.html',
  styleUrls: ['./liveinfos.component.scss']
})
export class LiveinfosComponent implements OnInit {

  @Input() team1;
  @Input() team2;


  constructor() {

    this.team1 = {
      score: 0,
      pts  : 0,
      ass  : 0,
      reb  : 0
    }
    this.team2 = {
      score: 0,
      pts  : 0,
      ass  : 0,
      reb  : 0
    }
   }

  ngOnInit() {
  }

}
