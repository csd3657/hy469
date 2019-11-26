import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() text:string;

  constructor() { }

  ngOnInit() {
  }

}
