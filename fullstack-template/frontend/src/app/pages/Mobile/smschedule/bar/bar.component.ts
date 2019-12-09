import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input() date: string;
  
  constructor() { }

  ngOnInit() {
  }

}
