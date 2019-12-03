import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NewsRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
