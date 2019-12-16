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

<<<<<<< HEAD
  public id;
    constructor() {
      this.id = "4px solid red";
      
     }

ngOnInit() {
   document.getElementById("container").style.border= this.id;
}

=======
  constructor() {  }

  ngOnInit() {
   
  }
>>>>>>> branchManos

}
