import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatchComponent } from './match/match.component';

@Component({
  selector: 'ami-fullstack-smschedule',
  templateUrl: './smschedule.component.html',
  styleUrls: ['./smschedule.component.scss']
})
export class SMscheduleComponent implements OnInit {

  add: string = "../../../../../../assets/teams_Schedule/Add_to_watchlist.png";
  remove: string = "../../../../../../assets/images/remove.png";

  @Input() matches;

  @Input() icon: string = "../../../../../../assets/teams_Schedule/Add_to_watchlist.png";
  @ViewChild(MatchComponent,{static:true}) child:MatchComponent

  public hide_the_rest_page = true;

 
  constructor() {
    this.matches = {
      1: this.remove,
      2: this.remove,
      3: this.add,
      4: this.add,
      5: this.add
    }
  }

  ngOnInit() {
  }


  hide_the_rest() {
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }
  changeTheIcon(data) {
    console.log(data);
    if (this.matches[data] == this.add) {
      this.matches[data] = this.remove
    } else {
      this.matches[data] = this.add
    }
  }


}
