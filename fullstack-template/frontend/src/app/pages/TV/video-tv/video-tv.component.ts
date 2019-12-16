import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-video-tv',
  templateUrl: './video-tv.component.html',
  styleUrls: ['./video-tv.component.scss']
})
export class VideoTVComponent implements OnInit {

  public video_counter;

  videos = {
    1: "video1",
    2: "video2",
    3: "video3",
    4: "video4",
    5: "video5",
    6: "video6",
    7: "video7",
    8: "video8",
    9: "video9",
    10: "video10"
  };

  constructor(private _socketService: SocketsService, private _mobileService: MobileService, private router: Router) {
    this.video_counter = 1;
   }

  ngOnInit() {
    document.getElementById(this.videos[this.video_counter]).style.border = "3px solid white";

    this._socketService.syncMessages("VideoMenuTV").subscribe(msg => {
      console.log(msg);
      
      if (this.router.url === '/VideosTv') {
        console.log(msg.message["show"]);
        if (msg.message["show"] == 'up') {
          this.up_click();
        }
        if (msg.message["show"] == 'down') {
          this.down_click();
        }
        if (msg.message["show"] == 'left') {
          this.left_click();
        }
        if (msg.message["show"] == 'right') {
          this.right_click();
        }
        if (msg.message["show"] == 'ok') {
          this.ok_click();
        }
      }

    })

   

  }

  up_click() {
    if (this.video_counter > 5 && this.video_counter < 10) {
      this.not_onclick_video_effect(this.video_counter);
      this.video_counter = this.video_counter - 5;
      this.onclick_video_effect(this.video_counter);
    }else{
      console.log('DEMO LIMITS HERE. Press down button');
      this.video_counter = 1;
    }
  }

  down_click() {
    if (this.video_counter > 0 && this.video_counter < 4) {
      this.not_onclick_video_effect(this.video_counter);
      this.video_counter = this.video_counter + 5;
      this.onclick_video_effect(this.video_counter);
    }else{
      console.log('DEMO LIMITS HERE. Press up button');
      this.video_counter = 10;
    }
  }

  left_click() {
    if (this.video_counter != 1 && this.video_counter != 6) {
      this.not_onclick_video_effect(this.video_counter);
      this.video_counter = this.video_counter - 1;
      this.onclick_video_effect(this.video_counter);
    }else{
      console.log('DEMO LIMITS HERE. Press right button');
    }
  }

  right_click() {
    if (this.video_counter != 10 && this.video_counter != 5) {
      this.not_onclick_video_effect(this.video_counter);
      this.video_counter = this.video_counter + 1;
      if(this.video_counter > 10){
        this.video_counter = 10;
      }
      this.onclick_video_effect(this.video_counter);
    }else{
      console.log('DEMO LIMITS HERE. Press left button');
    }
  }

  ok_click() {
    if(this.video_counter == 2){
      document.getElementById("theVideo").style.visibility = "visible";

    }else{
      console.log('THIS VIDEO IS NOT AVAILABLE FOR DEMO VERSION (PLEASE CHOOSE EFES VS BARCA)');
    }
  }

  onclick_video_effect(which_to_change) {
    console.log(which_to_change);
    document.getElementById(this.videos[which_to_change]).style.border = "3px solid white";
  }

  not_onclick_video_effect(which_to_change) {
    console.log(which_to_change);
    document.getElementById(this.videos[which_to_change]).style.border = "0px solid white";
  }

}
