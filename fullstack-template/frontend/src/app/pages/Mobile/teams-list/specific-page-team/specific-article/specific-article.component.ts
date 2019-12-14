import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-specific-article',
  templateUrl: './specific-article.component.html',
  styleUrls: ['./specific-article.component.scss']
})
export class SpecificArticleComponent implements OnInit {

  @Input() image:string;
  @Input() title:string;
  @Input() text:string;
  @Input() date:string;

  constructor() { }

  ngOnInit() {
  }

}
