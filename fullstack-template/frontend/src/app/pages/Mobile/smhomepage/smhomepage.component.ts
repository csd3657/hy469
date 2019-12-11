import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-smhomepage',
  templateUrl: './smhomepage.component.html',
  styleUrls: ['./smhomepage.component.scss']
})
export class SMhomepageComponent implements OnInit {

  public hide_the_rest_page = true;
  
  constructor() { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }
}
