import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-votestep2',
  templateUrl: './votestep2.component.html',
  styleUrls: ['./votestep2.component.scss']
})
export class Votestep2Component implements OnInit {

  @Output() public childEvent1 = new EventEmitter();
  @Output() public childEvent2 = new EventEmitter();

  @Input() public image;

  constructor() { }

  SendToParent1(){
    this.childEvent1.emit();
  }

  SendToParent2(){
    this.childEvent2.emit();
  }

  ngOnInit() {
  }

}
