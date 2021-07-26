import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName= '';
  constructor() {
  }

  ngOnInit() {
    this.userName = localStorage.getItem('name');
  }

}
