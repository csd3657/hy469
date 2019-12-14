import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-specific-team-statistics',
  templateUrl: './specific-team-statistics.component.html',
  styleUrls: ['./specific-team-statistics.component.scss']
})
export class SpecificTeamStatisticsComponent implements OnInit {

  categories=['Games','Wins','Points','2 Points Fiels Goal %','3 Points Fiels Goal %','Free throws %','Rebounds','Assists','Steals','Turnovers','Blocks','Fouls']
  results=['5','3','300','43.0','52.0','80.2','52','25','12','25','12','60']

  constructor() { }

  ngOnInit() {
  }

}
