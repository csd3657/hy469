import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'ami-fullstack-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss']
})
export class VideoComponentComponent implements OnInit {

  @Input() src_image: string;
  @Input() text: string;
  @Input() date_text: string;

  @Input() ggg: boolean;

    constructor() {
      
     }

ngOnInit() {
   
}

ngOnChanges(){
  if(this.ggg){
    document.getElementById("container").style.border = "4px solid white";
  }else{
    document.getElementById("container").style.border = "0px solid red";
  }
 
}

}
