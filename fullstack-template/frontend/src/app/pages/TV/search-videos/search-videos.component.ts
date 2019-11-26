import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.scss']
})
export class SearchVideosComponent implements OnInit {

  @Input() src_image:string;
  @Input() date_text:string;
  @Input() text:string;

  constructor() { }

  ngOnInit() {
  }

}
