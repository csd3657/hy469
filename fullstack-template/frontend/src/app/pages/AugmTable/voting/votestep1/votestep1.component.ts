import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ami-fullstack-votestep1',
  templateUrl: './votestep1.component.html',
  styleUrls: ['./votestep1.component.scss']
})
export class Votestep1Component implements OnInit {
  public clicked = false;

  public player;
  @Output() public childEvent = new EventEmitter();
  @Output() public image_vote = new EventEmitter();

  constructor() { }

  save_image(){
    this.image_vote.emit(this.player);
  }
  SendToParent() {
    if(this.clicked){
      this.save_image();
      this.childEvent.emit();
    }
    
  }
  ngOnInit() {
  }


  player_clicked(player) {
    this.player = player;
    if (player === 'campazzo') {
      if (!this.clicked) {
        document.getElementById("campazzo").style.border = "3px solid white";
        document.getElementById("dorsey").style.border = "0px solid white";
        this.clicked = true;
      } else {
        this.clicked = false;
        document.getElementById("campazzo").style.border = "0px solid white";
      }


    }

    if (player == 'dorsey') {
      if (!this.clicked) {
        document.getElementById("campazzo").style.border = "0px solid white";
        document.getElementById("dorsey").style.border = "3px solid white";
        this.clicked = true;
      } else {
        this.clicked = false;
        document.getElementById("dorsey").style.border = "0px solid white";
      }

    }

  }

}
