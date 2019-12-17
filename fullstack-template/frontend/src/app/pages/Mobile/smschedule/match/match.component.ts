import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() matchID:string;
  @Input() watchlist: string;
  @Output() public changeIcon = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.changeIcon.emit(this.matchID);
  }

}
