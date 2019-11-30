import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-first-match',
  templateUrl: './first-match.component.html',
  styleUrls: ['./first-match.component.scss']
})
export class FirstMatchComponent implements OnInit {

  @Input() image_team1 : string;
  @Input() play_image :string
  @Input() image_team2: string;
  @Input() text_time : string;
  @Input() text_score :string;

  constructor() { }

  ngOnInit() {
  }

}
