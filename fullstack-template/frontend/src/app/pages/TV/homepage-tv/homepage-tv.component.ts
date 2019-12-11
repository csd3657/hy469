import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';

@Component({
  selector: 'ami-fullstack-homepage-tv',
  templateUrl: './homepage-tv.component.html',
  styleUrls: ['./homepage-tv.component.scss']
})
export class HomepageTVComponent implements OnInit {

  constructor(private _socketService: SocketsService, private _mobileService: MobileService) { }

  ngOnInit() {
    this._socketService.syncMessages("openMatch").subscribe(msg=>{
      console.log(msg)
      if(msg.message["show"]){
        document.getElementById("theMatch").style.display="block";
      }else{
        document.getElementById("theMatch").style.display="none"
      }
    })
  }

  closeMatch(){
    this._mobileService.closeMatchToTv(false).subscribe();
  }

}
