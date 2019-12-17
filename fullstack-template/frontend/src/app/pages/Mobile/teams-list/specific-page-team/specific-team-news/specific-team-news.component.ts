import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-specific-team-news',
  templateUrl: './specific-team-news.component.html',
  styleUrls: ['./specific-team-news.component.scss']
})
export class SpecificTeamNewsComponent implements OnInit {

  public hide_the_rest_page = true;
  constructor() {
   
   }

  ngOnInit() {
  }
  
  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

  

}
