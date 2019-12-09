import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-teams-profile',
  templateUrl: './teams-profile.component.html',
  styleUrls: ['./teams-profile.component.scss']
})
export class TeamsProfileComponent implements OnInit {

  @Input() team:string;
  @Input() name:string;
  @Input() nation:string;
  @Input() short:string;

  constructor() { }

  ngOnInit() {
  }

}
