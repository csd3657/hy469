import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import { Router } from '@angular/router';
import { LeapService, Gestures } from 'src/app/cursor/leap.service';

@Component({
  selector: 'ami-fullstack-homepage-tv',
  templateUrl: './homepage-tv.component.html',
  styleUrls: ['./homepage-tv.component.scss']
})
export class HomepageTVComponent implements OnInit {

  @ViewChild('myVideo', { static: true }) myVideo: ElementRef;

  constructor(private _socketService: SocketsService, private _mobileService: MobileService, private router: Router, private _leapService: LeapService) {

  }

  ngOnInit() {

    this._leapService.gestureRecognizer().subscribe((gesture) => {
      if (gesture == Gestures.SWIPE_LEFT) {
        console.log('swipe left -- home component');
        this.rewind_back_30sec();
      }
    });

    this._socketService.syncMessages("openMatch").subscribe(msg => {
      console.log(msg)
      if (this.router.url === '/HomepageTv') {
        if (msg.message["show"]) {
          this.myVideo.nativeElement.play();
          document.getElementById("theMatch").style.visibility = "visible";
          //this.router.navigateByUrl('/RealVsMaccabi');
        } else {
          this.myVideo.nativeElement.pause();
          document.getElementById("theMatch").style.visibility = "hidden";
          //this.router.navigateByUrl('/HomepageTv');
        }
      }

    })

    this._socketService.syncMessages("pause_play_Match").subscribe(msg => {
      console.log(msg)
      if (msg.message["show"]) {
        this.myVideo.nativeElement.play();
      } else {
        this.myVideo.nativeElement.pause();
      }
    })

  }

  closeMatch() {
    this._mobileService.closeMatchToTv(false).subscribe();
  }

  rewind_back_30sec() {
    this.myVideo.nativeElement.pause();
    this.myVideo.nativeElement.currentTime -= 30;
    this.myVideo.nativeElement.play();
  }

}
