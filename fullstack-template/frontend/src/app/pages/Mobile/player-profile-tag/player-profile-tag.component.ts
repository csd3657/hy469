import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-player-profile-tag',
  templateUrl: './player-profile-tag.component.html',
  styleUrls: ['./player-profile-tag.component.scss']
})
export class PlayerProfileTagComponent implements OnInit {

  @Input() image:string;
  @Input() page_title:string;
  @Input() link_icon:string;

  constructor() { }

  ngOnInit() {
  }

}
