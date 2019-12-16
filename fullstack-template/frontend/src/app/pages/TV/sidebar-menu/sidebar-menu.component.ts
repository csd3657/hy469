import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss',]
})
export class SidebarMenuComponent implements OnInit {

  public menu_is_open = false;
  public pages_counter = 1;

  redirect_pages = {
    1: '/HomepageTv',
    2: '/News',
    3: '/VideosTv',
    4: '/ScheduleTv',
    5: '/Teams',
    6: '/Players',
    7: '/Ranking',
    8: '/WatchlistTv',
    9: '/Favourites'
  };

  constructor(private _socketService: SocketsService, private _mobileService: MobileService, private router: Router) { }

  ngOnInit() {

    this._socketService.syncMessages("open_TVmenu").subscribe(msg => {
      console.log(msg)
      if (msg.message["show"]) {
        this.menu_is_open = true;
        this.onclick_button_effect(this.pages_counter);
        document.getElementById("text").style.visibility = "visible";
      } else {
        this.menu_is_open = false;
        this.not_onclick_button_effect(this.pages_counter);
        document.getElementById("text").style.visibility = "hidden";
      }
    })

    this._socketService.syncMessages("control_TVmenu").subscribe(msg => {
      console.log(msg)
      if (msg.message["show"] == 'up') {
        this.up_click();
      }
      if (msg.message["show"] == 'down') {
        this.down_click();
      }
      if (msg.message["show"] == 'ok') {
        this.ok_click();
      }
    })
  }

  up_click() {
    if (this.pages_counter != 1) {
      this.not_onclick_button_effect(this.pages_counter);
      this.pages_counter = this.pages_counter - 1;
      this.onclick_button_effect(this.pages_counter);
    }
    
  }

  down_click() {
    if (this.pages_counter != 8) {
      this.not_onclick_button_effect(this.pages_counter);
      this.pages_counter = this.pages_counter + 1;
      this.onclick_button_effect(this.pages_counter);
    }

  }

  ok_click() {
    console.log(this.pages_counter);
    console.log(this.redirect_pages[this.pages_counter]);
    
    this._mobileService.open_TVmenu(false).subscribe();
    this.router.navigateByUrl(this.redirect_pages[this.pages_counter]);

    this.menu_is_open = false;
    this.not_onclick_button_effect(this.pages_counter);
    this.pages_counter = 1;
    this.onclick_button_effect(this.pages_counter);
  }

  onclick_button_effect(which_to_change){
    document.getElementById(which_to_change).style.fontSize = "60px";
    document.getElementById(which_to_change).style.color = "white";
    document.getElementById(which_to_change).style.fontWeight = "bold";
  }

  not_onclick_button_effect(which_to_change){
    document.getElementById(which_to_change).style.fontSize = "50px";
    document.getElementById(which_to_change).style.color = "rgb(112, 112, 112)";
    document.getElementById(which_to_change).style.fontWeight = "normal";
  }

}
