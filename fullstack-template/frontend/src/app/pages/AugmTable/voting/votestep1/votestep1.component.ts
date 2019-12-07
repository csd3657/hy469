import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ami-fullstack-votestep1',
  templateUrl: './votestep1.component.html',
  styleUrls: ['./votestep1.component.scss']
})
export class Votestep1Component implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  SendToParent(){
    this.childEvent.emit();
  }
  ngOnInit() {
  }

}
