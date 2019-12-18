import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ami-fullstack-smlivematch',
  templateUrl: './smlivematch.component.html',
  styleUrls: ['./smlivematch.component.scss']
})
export class SmlivematchComponent implements OnInit {

  constructor(private _mobileService: MobileService, private router: Router) { }

  ngOnInit() {
  }


  openMatchToTv() {

    this._mobileService.openMatchToTv(true).subscribe();
    this.router.navigateByUrl('/SMremotecontrol');

    this.openStatisticsToOtherDevices();
  }

  openStatisticsToOtherDevices(){
    this._mobileService.openStatisticsToOtherDevices('Wall').subscribe();
    this._mobileService.openStatisticsToOtherDevices('AugmTable').subscribe();
  }
  
}
