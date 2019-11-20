import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-substitute-player',
  templateUrl: './substitute-player.component.html',
  styleUrls: ['./substitute-player.component.scss']
  
})
export class SubstitutePlayerComponent implements OnInit {

  @Input() name: string;
  @Input() img_src: string;
  
  
  constructor() { }

  ngOnInit() {
  }

}
