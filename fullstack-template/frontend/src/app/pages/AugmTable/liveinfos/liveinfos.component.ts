import { Component, OnInit, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-liveinfos',
  templateUrl: './liveinfos.component.html',
  styleUrls: ['./liveinfos.component.scss']
})
export class LiveinfosComponent implements OnInit {


  @Input() team1: any;
  @Input() team2: any;

  public timerInterval=null;
  public value=59;
  public value2=24;
  public value3=9;
  constructor(public router:Router) {
    this.team1 =
    {
      score: 0,
      "player1": { pts: 0, ass: 0, reb: 0 },
      "player2": { pts: 0, ass: 0, reb: 0 },
      "player3": { pts: 0, ass: 0, reb: 0 },
      "player4": { pts: 0, ass: 0, reb: 0 },
      "player5": { pts: 0, ass: 0, reb: 0 }
    };

    this.team2 =
    {
      score: 0,
      "player1": { pts: 0, ass: 0, reb: 0 },
      "player2": { pts: 0, ass: 0, reb: 0 },
      "player3": { pts: 0, ass: 0, reb: 0 },
      "player4": { pts: 0, ass: 0, reb: 0 },
      "player5": { pts: 0, ass: 0, reb: 0 }
    };

  }

  ngOnInit() {
    this.start();
    this.first_3pt();


  }

  first_3pt(){
    setTimeout(()=>{
      this.team1['score'] = 3;
      this.team1['player3'].pts = 3;
      this.team1['player1'].ass = 1;
      this.first_macc_point();
    },120000);

    
  }
  first_macc_point(){
    setTimeout(()=>{
      this.team2['score'] = 1;
      this.team2['player5'].pts = 1;
      this.first_reb();
    },65000);

    
  }

  first_reb(){
    setTimeout(()=>{
      this.team2['player4'].reb = 1;
      this.macc_score();
    },19000);

    
  }
  macc_score(){
    setTimeout(()=>{
      this.team2['score'] = 4;
      this.team2['player1'].pts = 3;
      this.team2['player2'].ass = 1;
      this.halftimestats();
    },37000);

    //edw teleiwnei i timeout gia to prwto imixrono
  }

  halftimestats(){
    setTimeout(()=>{
      this.team1['score']=38;
      this.team1['player1'].pts = 9;
      this.team1['player1'].ass = 3;
      this.team1['player1'].reb=0;
      this.team1['player2'].pts = 2;
      this.team1['player2'].ass = 1;
      this.team1['player2'].reb=0;
      this.team1['player3'].pts = 6;
      this.team1['player3'].ass = 1;
      this.team1['player3'].reb=3;
      this.team1['player4'].pts = 0;
      this.team1['player4'].ass = 0;
      this.team1['player4'].reb=4;
      this.team1['player5'].pts = 6;
      this.team1['player5'].ass = 1;
      this.team1['player5'].reb=5;
      

      
      this.team2['score']=31;
      this.team2['player1'].pts = 10;
      this.team2['player1'].ass = 3;
      this.team2['player1'].reb=0;
      this.team2['player2'].pts = 2;
      this.team2['player2'].ass = 1;
      this.team2['player2'].reb=0;
      this.team2['player3'].pts = 3;
      this.team2['player3'].ass = 0;
      this.team2['player3'].reb=3;
      this.team2['player4'].pts = 5;
      this.team2['player4'].ass = 1;
      this.team2['player4'].reb=4;
      this.team2['player5'].pts = 2;
      this.team2['player5'].ass = 1;
      this.team2['player5'].reb=4;
      this.stop();
      this.Voting();
    
    },3000);
      

    //edw teleiwnei i timeout gia to prwto imixrono
  }
  
  start(){
    setTimeout(()=>{
      this.stop();
    this.value=59;
    this.value2=24;
    this.value3=9;
    this.timerInterval=setInterval(() => {this.changeValue();},1000);
    },100000);
    
  }

  stop(){
    clearInterval(this.timerInterval);
  }

  changeValue(){
    this.value2--;
    this.value--;
    if(this.value===0){
      this.value=59;
      this.value3--;
    }
    if(this.value2===0){
      this.value2=24;
    }
    document.getElementById("timer3").innerHTML=this.value3.toString();
    document.getElementById("timer2").innerHTML=this.value2.toString();
    document.getElementById("timer").innerHTML=this.value.toString();
  }
  Voting(){
    setTimeout(()=>{
      this.router.navigateByUrl('/TableVote');
    },80000);
  }
  
}
