import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SocketsService } from 'src/app/global/services';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';

@Component({
  selector: 'ami-fullstack-header-tag',
  templateUrl: './header-tag.component.html',
  styleUrls: ['./header-tag.component.scss']
})
export class HeaderTagComponent implements OnInit {

  public openMenu_flag = false;

  @Input() page_title: string;
  @Input() image: string;
  @Input() micro: string;
  @Output() public hide_rest_scroll = new EventEmitter();

  constructor(public router: Router, public _socketService: SocketsService, public _mobileService: MobileService) {
   
   }

  ngOnInit() {
    this._socketService.syncMessages("pause_play_Match").subscribe(msg => {
      console.log(msg)
      console.log('aaaaaaaaaaaaa')
      if (msg.message["show"]) {
        document.getElementById("connect_icon").style.visibility = "visible";
      }
    })
    
  }

  SendToParent(){
    this.hide_rest_scroll.emit();
  }
  openMenu(){
    this.openMenu_flag = !this.openMenu_flag;
  }

  open_article_cska(){
    this._mobileService.open_cska_article().subscribe();
  }

  

}
