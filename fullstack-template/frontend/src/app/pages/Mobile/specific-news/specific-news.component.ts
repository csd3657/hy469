import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';

@Component({
  selector: 'ami-fullstack-specific-news',
  templateUrl: './specific-news.component.html',
  styleUrls: ['./specific-news.component.scss']
})
export class SpecificNewsComponent implements OnInit {

  public hide_the_rest_page = true;
  
  constructor(public router: Router, private _mobileService: MobileService) {
    
  }

  ngOnInit() {
    
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }
}
