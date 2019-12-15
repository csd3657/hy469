import { Component, OnInit, Input } from '@angular/core';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-remotecontrol',
  templateUrl: './remotecontrol.component.html',
  styleUrls: ['./remotecontrol.component.scss']
})
export class RemotecontrolComponent implements OnInit {

  @Input() play_image: string;

  public hide_the_rest_page = true;
  public match_is_played = true;
  public menu_is_open = false;

  constructor(private _mobileService: MobileService, private router: Router) {
    this.play_image = "../../../../assets/remotecontrol/pause.png";
  }

  ngOnInit() {
  }

  hide_the_rest() {
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

  play_pause() {
    if (this.match_is_played) {
      this.play_image = "../../../../assets/remotecontrol/play.png";
      this._mobileService.play_Match(false).subscribe();
    } else {
      this.play_image = "../../../../assets/remotecontrol/pause.png";
      this._mobileService.play_Match(true).subscribe();
    }

    this.match_is_played = !this.match_is_played;
  }

  open_menu() {
    if (this.menu_is_open) {
      this._mobileService.open_TVmenu(false).subscribe();
    } else {
      this._mobileService.open_TVmenu(true).subscribe();
    }

    this.menu_is_open = !this.menu_is_open;
  }

  control_menuTV(button) {
    if (button == 'up'){
      this._mobileService.controlMenuTV('up').subscribe();
    }
    if (button == 'down'){
      this._mobileService.controlMenuTV('down').subscribe();
    }
    if (button == 'ok'){
      this._mobileService.controlMenuTV('ok').subscribe();
    }
  }

}
