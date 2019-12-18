import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-augm-table-default',
  templateUrl: './augm-table-default.component.html',
  styleUrls: ['./augm-table-default.component.scss']
})
export class AugmTableDefaultComponent implements OnInit {

  constructor(public _socketService: SocketsService, public router: Router) { }

  ngOnInit() {

    this._socketService.syncMessages("openStatisticsToOtherDevices").subscribe(msg => {
      console.log(msg)
      if (msg.message["show"] === 'AugmTable'){
        this.router.navigateByUrl('/TableLiveInfos');
      } else {
        console.log('open wall statistics')
      }
    })
  }

}
