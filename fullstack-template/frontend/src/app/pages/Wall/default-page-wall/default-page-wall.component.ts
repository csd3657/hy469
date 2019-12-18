import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-default-page-wall',
  templateUrl: './default-page-wall.component.html',
  styleUrls: ['./default-page-wall.component.scss']
})
export class DefaultPageWallComponent implements OnInit {

  constructor(public _socketService: SocketsService, public router: Router) { }

  ngOnInit() {

    this._socketService.syncMessages("openStatisticsToOtherDevices").subscribe(msg => {
      console.log(msg)
      if (msg.message["show"] === 'Wall') {
        this.router.navigateByUrl('/PrematchStatistics');
      } else {
        console.log('open table statistics')
      }
    })
  }


}
