import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-substitute-player',
  /*
  templateUrl: './substitute-player.component.html',
  styleUrls: ['./substitute-player.component.scss']
  */
 template:` <h2>{{"Hello "+name}} </h2>  `
})
export class SubstitutePlayerComponent implements OnInit {

  @Input('name') playerName : string;
  
  name = 'campazzo';
  
  constructor() { }

  ngOnInit() {
  }

}
