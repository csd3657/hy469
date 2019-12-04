import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NewsRowComponent implements OnInit {


  @Input() title1:string;
  @Input() title2:string;
  @Input() title3:string;
  @Input() title4:string;
  @Input() thumbnail1:string;
  @Input() thumbnail2:string;
  @Input() thumbnail3:string;
  @Input() thumbnail4:string;
  constructor() { }

  ngOnInit() {
  }

}
