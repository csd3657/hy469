import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/global/services/mobile/mobile.service';

@Component({
  selector: 'ami-fullstack-news-mobile',
  templateUrl: './news-mobile.component.html',
  styleUrls: ['./news-mobile.component.scss']
})
export class NewsMobileComponent implements OnInit {

  public hide_the_rest_page = true;
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  hide_the_rest(){
    this.hide_the_rest_page = !this.hide_the_rest_page;
  }

  open_CSKA_article(){
    this.router.navigateByUrl('NewsMobile/CSKARoster');
  }

}
