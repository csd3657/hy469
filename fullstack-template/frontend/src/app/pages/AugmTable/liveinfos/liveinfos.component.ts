import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-liveinfos',
  templateUrl: './liveinfos.component.html',
  styleUrls: ['./liveinfos.component.scss']
})
export class LiveinfosComponent implements OnInit {


  @Input() team1: any;
  @Input() team2: any;


  constructor() {
    this.team1 =
    {
      score: 0,
      "player1": { pts: 0, ass: 0, reb: 0 },
      "player2": { pts: 0, ass: 0, reb: 0 },
      "player3": { pts: 0, ass: 0, reb: 0 },
      "player4": { pts: 0, ass: 0, reb: 0 },
      "player5": { pts: 0, ass: 0, reb: 0 }
    };

    this.team2 =
    {
      score: 0,
      "player1": { pts: 0, ass: 0, reb: 0 },
      "player2": { pts: 0, ass: 0, reb: 0 },
      "player3": { pts: 0, ass: 0, reb: 0 },
      "player4": { pts: 0, ass: 0, reb: 0 },
      "player5": { pts: 0, ass: 0, reb: 0 }
    };

  }

  ngOnInit() {
  }

}
