import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'mobile-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() video_thumbnail:string;
  @Input() video_title:string;
  @Input() video_desc:string;
  constructor() { }

  ngOnInit() {
  }

}
