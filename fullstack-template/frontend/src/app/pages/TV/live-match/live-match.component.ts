import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SocketsService } from 'src/app/global/services';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import { LeapService, Gestures } from 'src/app/cursor/leap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})



export class LiveMatchComponent implements OnInit {

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


  }

  rewind_back_30sec() {
    this.myVideo.nativeElement.pause();
    this.myVideo.nativeElement.currentTime -= 30;
    this.myVideo.nativeElement.play();
  }



}
