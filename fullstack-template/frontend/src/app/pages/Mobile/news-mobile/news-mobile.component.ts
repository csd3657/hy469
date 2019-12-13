import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-news-mobile',
  templateUrl: './news-mobile.component.html',
  styleUrls: ['./news-mobile.component.scss']
})
export class NewsMobileComponent implements OnInit {

  public hide_the_rest_page = true;
  
  constructor() { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

}
