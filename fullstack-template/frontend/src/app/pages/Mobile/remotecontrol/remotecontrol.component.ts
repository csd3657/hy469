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
}
