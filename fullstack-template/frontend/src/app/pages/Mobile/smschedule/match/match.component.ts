import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @Input() date: string;
  @Input() img1: string;
  @Input() img2: string;
  @Input() name1: string;
  @Input() name2: string;


  constructor() { }

  ngOnInit() {
  }

}
