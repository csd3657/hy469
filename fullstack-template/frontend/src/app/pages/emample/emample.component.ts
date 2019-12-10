import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/global/services/example/example.service';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-emample',
  templateUrl: './emample.component.html',
  styleUrls: ['./emample.component.scss']
})
export class EmampleComponent implements OnInit {

  public myUserID;
  public userIDToTreat;
  public foodToTreat;
  public socketEvents: { event: string, message: any }[];

  constructor(private exampleService: ExampleService, private socketService: SocketsService) {
    this.socketEvents = [];
  }

  ngOnInit() {
    this.myUserID = "me";
    this.userIDToTreat = "me2";
    this.foodToTreat = "aFoodToTreat";
    this.socketService.syncMessages("treating1").subscribe(msg => {
      this.socketEvents.push(msg);
    })
  }
  public treatSomeone(){
    this.exampleService.treatSomeone(this.foodToTreat, this.userIDToTreat).subscribe();
  }

  public treat(){
    //this.userIDToTreat = "me";
    this.treatSomeone();
  }


}
