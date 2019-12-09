import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-header-tag',
  templateUrl: './header-tag.component.html',
  styleUrls: ['./header-tag.component.scss']
})
export class HeaderTagComponent implements OnInit {

  @Input() page_title: string;

  constructor() { }

  ngOnInit() {
  }


}
