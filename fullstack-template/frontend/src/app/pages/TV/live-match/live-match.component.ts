import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ami-fullstack-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})



export class LiveMatchComponent implements OnInit {

  public safeURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xPY_IcihVfY');
  }

  ngOnInit() {
  }

}
