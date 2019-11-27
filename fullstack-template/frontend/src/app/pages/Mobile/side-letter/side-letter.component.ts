import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-side-letter',
  templateUrl: './side-letter.component.html',
  styleUrls: ['./side-letter.component.scss']
})
export class SideLetterComponent implements OnInit {

  letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor() { }

  ngOnInit() {
  }

}
