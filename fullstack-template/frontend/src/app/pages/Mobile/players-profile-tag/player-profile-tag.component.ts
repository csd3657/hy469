import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ami-fullstack-player-profile-tag',
  templateUrl: './player-profile-tag.component.html',
  styleUrls: ['./player-profile-tag.component.scss']
})
export class PlayerProfileTagComponent implements OnInit {

  public openMenu_flag = false;

  @Input() image:string;
  @Input() page_title:string;
  @Input() link_icon:string;
  
  @Output() public hide_rest_scroll = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  SendToParent(){
    this.hide_rest_scroll.emit();
  }
  openMenu(){
    this.openMenu_flag = !this.openMenu_flag;
  }

}