import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() back_img: string;
  @Input() play_img: string;
  @Input() context: string;

  constructor() { }

  ngOnInit() {
  }

}
