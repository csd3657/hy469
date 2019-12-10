import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-statistics-tag',
  templateUrl: './statistics-tag.component.html',
  styleUrls: ['./statistics-tag.component.scss']
})
export class StatisticsTagComponent implements OnInit {

  @Input() image:string;
  @Input() page_title:string;
  @Input() link_icon:string;

  constructor() { }

  ngOnInit() {
  }

}
