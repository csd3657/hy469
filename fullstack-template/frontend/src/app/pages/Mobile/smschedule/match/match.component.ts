import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SmartSpeakerService } from 'src/app/smart-speaker.service';


@Component({
  selector: 'ami-fullstack-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  public i=1;
  @Input() date: string;
  @Input() img1: string;
  @Input() img2: string;
  @Input() name1: string;
  @Input() name2: string;
  @Input() matchID:string;
  @Input() watchlist: string;
  @Output() public changeIcon = new EventEmitter();

  constructor(public _smartSpeaker:SmartSpeakerService) { }

  ngOnInit() {
  }

  sendToParent(){
    this.changeIcon.emit(this.matchID);
  }

  openDialog(){
    if(this.watchlist==='../../../../../../assets/teams_Schedule/Add_to_watchlist.png'){
      if(this.i%2==0){
        this._smartSpeaker.speak('See you at game time,pal', ()=>{
          console.log('speech ended');
          });
      }else{
        this._smartSpeaker.speak('Hmm,Nice choice', ()=>{
          console.log('speech ended');
          });
      }
      this.i++;
      
    }else{
      this._smartSpeaker.speak('You shall not watch the match!', ()=>{
        console.log('speech ended');
        });
    }
  }

}
