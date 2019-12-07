import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {


  public loadComponent1 = true;
  public loadComponent2 = false;
  public loadComponent3 = false;

  constructor() {

  }


  loadMyChildComponent1() {
    this.loadComponent1 = false;
    this.loadComponent2 = true;
    this.loadComponent3 = false;
  }

  loadMyChildComponent2() {
    this.loadComponent1 = true;
    this.loadComponent2 = false;
    this.loadComponent3 = false;
  }

  loadMyChildComponent3() {
    this.loadComponent1 = false;
    this.loadComponent2 = false;
    this.loadComponent3 = true;
  }


  ngOnInit() {
  }

}
