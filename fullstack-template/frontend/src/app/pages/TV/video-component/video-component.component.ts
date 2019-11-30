import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss']
})
export class VideoComponentComponent implements OnInit {

  @Input() src_image:string;
  @Input() text:string;
  @Input() date_text:string;

  constructor() { }

  ngOnInit() {
  }

}
