import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-header-tag',
  templateUrl: './header-tag.component.html',
  styleUrls: ['./header-tag.component.scss']
})
export class HeaderTagComponent implements OnInit {

  public openMenu_flag = false;

  @Input() page_title: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

  openMenu(){
    this.openMenu_flag = !this.openMenu_flag;
  }

}
