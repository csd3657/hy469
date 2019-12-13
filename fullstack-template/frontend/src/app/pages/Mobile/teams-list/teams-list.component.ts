import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  public hide_the_rest_page = true;
  
  constructor() { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

}
