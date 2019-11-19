import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-substitute-player-bottom',
  templateUrl: './substitute-player-bottom.component.html',
  styleUrls: ['./substitute-player-bottom.component.scss']
})
export class SubstitutePlayerBottomComponent implements OnInit {

  @Input() name: string;
  @Input() img_src: string;

  constructor() { }

  ngOnInit() {
  }

}
