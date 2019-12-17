import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ami-fullstack-team-header-tag',
  templateUrl: './team-header-tag.component.html',
  styleUrls: ['./team-header-tag.component.scss']
})
export class TeamHeaderTagComponent implements OnInit {
  public openMenu_flag = false;
  public hide_the_rest_page = true;

  @Input() image:string;
  @Input() page_title:string;
  @Input() link_icon:string;
  @Output() public hide_rest_scroll = new EventEmitter();

  
  
  constructor() { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }


  SendToParent(){
    this.hide_rest_scroll.emit();
  }
  
  openMenu(){
    this.openMenu_flag = !this.openMenu_flag;
  }

}
