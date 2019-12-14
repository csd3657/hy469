import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-remotecontrol',
  templateUrl: './remotecontrol.component.html',
  styleUrls: ['./remotecontrol.component.scss']
})
export class RemotecontrolComponent implements OnInit {

  public hide_the_rest_page = true;
  public match_is_played = true;
  
  constructor(private _mobileService: MobileService, private router: Router) { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

  play_pause(){
    
    if(this.match_is_played){
      this._mobileService.play_Match(false).subscribe();
    }else{
      this._mobileService.play_Match(true).subscribe();
    }

    this.match_is_played = !this.match_is_played;
    
  }
}
