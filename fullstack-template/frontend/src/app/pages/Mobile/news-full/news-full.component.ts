import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mobile-news-full',
  templateUrl: './news-full.component.html',
  styleUrls: ['./news-full.component.scss']
})
export class NewsFullComponent implements OnInit {

  constructor() { }

  @Input() article:string;
  @Input() author:string;
  @Input() date:string;
  @Input() image:string;
  ngOnInit() {
  }

}
