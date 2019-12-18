import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-last-five-results',
  templateUrl: './last-five-results.component.html',
  styleUrls: ['./last-five-results.component.scss']
})
export class LastFiveResultsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    this.openLiveStats();
  }

  openLiveStats() {
    setTimeout(() => 
    { 
      this.router.navigateByUrl('/PrematchStatistics'); 
    },
    80000 //1.20min
    );
  }
}
