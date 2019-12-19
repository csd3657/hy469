import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartSpeakerService } from 'src/app/smart-speaker.service';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';

@Component({
  selector: 'ami-fullstack-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  public hide_the_rest_page = true;

  constructor(public router: Router, public _smartSpeaker: SmartSpeakerService, public _mobileService: MobileService) {
    this._smartSpeaker.addCommand('Hello', () => {
      this._smartSpeaker.speak('Yes sir');
      this.openPunter();
    });
   }

  ngOnInit() {
    this._smartSpeaker.addCommand('Hello', () => {
      this._smartSpeaker.speak('Yes sir');
      this.openPunter();
    });
  }

  hide_the_rest() {
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

  openPunter() {
    this._mobileService.open_Punter_ToWall().subscribe();

    this.router.navigateByUrl('/PlayersMobile/KevinPunter');
  }

}

