import { Component, OnInit, Input } from '@angular/core';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'ami-fullstack-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {

  @Input() player_image:string;
  @Input() name:string;
  @Input() team:string;
  @Input() nation:string;

  constructor() { }

  ngOnInit() {
  }

}
