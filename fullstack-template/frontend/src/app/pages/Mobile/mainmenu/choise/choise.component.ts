import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.scss']
})
export class ChoiseComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
