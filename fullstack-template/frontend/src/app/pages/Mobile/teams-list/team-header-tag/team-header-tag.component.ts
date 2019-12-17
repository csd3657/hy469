import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-team-header-tag',
  templateUrl: './team-header-tag.component.html',
  styleUrls: ['./team-header-tag.component.scss']
})
export class TeamHeaderTagComponent implements OnInit {

  @Input() image:string;
  @Input() page_title:string;
  @Input() link_icon:string;


  public hide_the_rest_page = true;
  
  constructor() { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

}
