import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ami-fullstack-header-tag',
  templateUrl: './header-tag.component.html',
  styleUrls: ['./header-tag.component.scss']
})
export class HeaderTagComponent implements OnInit {

  public openMenu_flag = false;

  @Input() page_title: string;
  @Input() image: string;
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
