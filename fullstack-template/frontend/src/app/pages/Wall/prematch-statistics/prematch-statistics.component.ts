import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-prematch-statistics',
  templateUrl: './prematch-statistics.component.html',
  styleUrls: ['./prematch-statistics.component.scss']
})
export class PrematchStatisticsComponent implements OnInit {

  @Input() team1;
  @Input() team2;

  constructor() {
    this.team1 = {
      score : 0,
      pt2   : 0,
      pt3   : 0,
      Reb   : 0,
      Ass   : 0,
      Turn  : 0,
      St    : 0,
      Bl    : 0
    }
    this.team2 = {
      score : 0,
      pt2   : 0,
      pt3   : 0,
      Reb   : 0,
      Ass   : 0,
      Turn  : 0,
      St    : 0,
      Bl    : 0
    }
   }

  ngOnInit() {
    this.first_3pt();


  }

  first_3pt(){
    setTimeout(()=>{
      this.team1['pt3'] = 100;
      this.team1['score'] = 3;
      this.team1['Ass'] = 1;
      this.first_macc_point();
    },40000);

    
  }
  first_macc_point(){
    setTimeout(()=>{
      this.team2['score'] = 1;
      this.first_reb();
    },65000);

    
  }

  first_reb(){
    setTimeout(()=>{
      this.team2['Reb'] = 1;
      this.macc_score();
    },19000);

    
  }
  macc_score(){
    setTimeout(()=>{
      this.team2['score'] = 4;
      this.team2['pt3'] = 100;
      this.team2['Ass'] = 1;
    },37000);

    //edw teleiwnei i timeout gia to prwto imixrono
  }

  

}
