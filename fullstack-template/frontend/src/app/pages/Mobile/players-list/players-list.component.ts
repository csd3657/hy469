import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  public hide_the_rest_page = true;
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

  open_player_profile(){
    this.router.navigateByUrl('/PlayersMobile/KevinPunter');
  }  

}

