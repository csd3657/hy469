import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-player-case',
  templateUrl: './player-case.component.html',
  styleUrls: ['./player-case.component.scss']
})
export class PlayerCaseComponent implements OnInit {

  @Input() name: string;
  @Input() statsnum: string;
  @Input() country: string;
  @Input() number: string;
  @Input() image: string;
  @Input() position: string;

  constructor() { }

  ngOnInit() {
  }

}
