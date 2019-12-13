import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-smschedule',
  templateUrl: './smschedule.component.html',
  styleUrls: ['./smschedule.component.scss']
})
export class SMscheduleComponent implements OnInit {

  public hide_the_rest_page = true;
  constructor() { }

  ngOnInit() {
  }

  
  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

}
