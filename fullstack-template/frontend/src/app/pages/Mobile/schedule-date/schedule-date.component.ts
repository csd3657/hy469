import { Component, OnInit, Input } from '@angular/core';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'ami-fullstack-schedule-date',
  templateUrl: './schedule-date.component.html',
  styleUrls: ['./schedule-date.component.scss']
})
export class ScheduleDateComponent implements OnInit {

  @Input() date:Date;
  constructor() { }

  ngOnInit() {
  }

}
