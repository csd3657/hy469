import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  public hide_the_rest_page = true;
  
  constructor() { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }
}

