import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() venue:string;
  @Input() team:string;
  constructor() { }

  ngOnInit() {
  }

}
