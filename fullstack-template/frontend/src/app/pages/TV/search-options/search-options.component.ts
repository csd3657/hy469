import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit {

  @Input() text:string;

  constructor() { }

  ngOnInit() {
  }

}
