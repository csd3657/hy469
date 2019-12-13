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


  constructor() { }

  ngOnInit() {
  }

}
