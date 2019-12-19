import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartSpeakerService } from 'src/app/smart-speaker.service';

@Component({
  selector: 'ami-fullstack-wallnews',
  templateUrl: './wallnews.component.html',
  styleUrls: ['./wallnews.component.scss']
})
export class WallnewsComponent implements OnInit {

  constructor(public _smartSpeaker:SmartSpeakerService, public router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigateByUrl('/WallDefault');
    },
    30000);
  }

}
