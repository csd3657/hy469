import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ami-fullstack-homepage-tv',
  templateUrl: './homepage-tv.component.html',
  styleUrls: ['./homepage-tv.component.scss']
})
export class HomepageTVComponent implements OnInit {

  constructor(private _socketService: SocketsService, private _mobileService: MobileService,private router: Router) { }

  ngOnInit() {
    this._socketService.syncMessages("openMatch").subscribe(msg=>{
      console.log(msg)
      if(msg.message["show"]){
        //document.getElementById("theMatch").style.display="block";
        this.router.navigateByUrl('/RealVsMaccabi');
      }else{
        document.getElementById("theMatch").style.display="none"
        this.router.navigateByUrl('/HomepageTv');
      }
    })
  }

  closeMatch(){
    this._mobileService.closeMatchToTv(false).subscribe();
  }

}
