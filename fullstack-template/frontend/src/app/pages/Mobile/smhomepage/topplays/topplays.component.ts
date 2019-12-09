import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-topplays',
  templateUrl: './topplays.component.html',
  styleUrls: ['./topplays.component.scss']
})
export class TopplaysComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
