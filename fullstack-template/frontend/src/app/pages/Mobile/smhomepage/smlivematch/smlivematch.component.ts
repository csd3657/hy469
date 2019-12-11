import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';

@Component({
  selector: 'ami-fullstack-smlivematch',
  templateUrl: './smlivematch.component.html',
  styleUrls: ['./smlivematch.component.scss']
})
export class SmlivematchComponent implements OnInit {

  constructor(private _mobileService: MobileService) { }

  ngOnInit() {
  }


  openMatchToTv(){
    this._mobileService.openMatchToTv(true).subscribe();
  }

}
