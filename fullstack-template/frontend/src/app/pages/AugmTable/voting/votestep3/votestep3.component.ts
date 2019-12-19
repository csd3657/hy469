import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-votestep3',
  templateUrl: './votestep3.component.html',
  styleUrls: ['./votestep3.component.scss']
})
export class Votestep3Component implements OnInit {
  @Output()  closeVote = new EventEmitter();
  constructor(public router: Router) { }

  ngOnInit() {
  }

  SendToParent(){
    this.closeVote.emit();
  }

}
