import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-title-tag',
  templateUrl: './title-tag.component.html',
  styleUrls: ['./title-tag.component.scss']
})
export class TitleTagComponent implements OnInit {

  @Input() header:string;

  constructor() { }

  ngOnInit() {
  }

}
