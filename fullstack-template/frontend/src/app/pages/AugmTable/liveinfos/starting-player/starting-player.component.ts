import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-starting-player',
  templateUrl: './starting-player.component.html',
  styleUrls: ['./starting-player.component.scss']
})
export class StartingPlayerComponent implements OnInit {

  @Input() img_src : string;
  @Input() playername : string;
  @Input() playerposition : string;
  
  constructor() { }

  ngOnInit() {
  }

}
