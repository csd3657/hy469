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
    4: '/ScheduleTv'
  };

  constructor(private _socketService: SocketsService, private _mobileService: MobileService, private router: Router) { }

  ngOnInit() {

    this._socketService.syncMessages("open_TVmenu").subscribe(msg => {
      console.log(msg)
      if (msg.message["show"]) {
        this.menu_is_open = true;
        document.getElementById("text").style.visibility = "visible";
      } else {
        this.menu_is_open = false;
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
      this.pages_counter -= this.pages_counter;
    }
  }

  down_click() {
    if (this.pages_counter != 4) {
      this.pages_counter += this.pages_counter;
    }
  }

  ok_click() {
    console.log(this.pages_counter);
    console.log(this.redirect_pages[this.pages_counter]);
    
    this._mobileService.open_TVmenu(false).subscribe();
    this.router.navigateByUrl(this.redirect_pages[this.pages_counter]);

    this.menu_is_open = false;
    this.pages_counter = 1;
  }



}
