import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.scss']
})
export class NewsBoxComponent implements OnInit {

  @Input() image:string;
  @Input() Title:string;
  @Input() Text:string;

  constructor() { }

  ngOnInit() {
  }

}
