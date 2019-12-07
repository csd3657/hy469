import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-stats-category',
  templateUrl: './stats-category.component.html',
  styleUrls: ['./stats-category.component.scss']
})
export class StatsCategoryComponent implements OnInit {
  
  @Input() categoryName: string;

  constructor() { }


  ngOnInit() {
  }

}
