import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feb-home',
  styleUrls: ['./home.component.less'],
  template: `
    <div class="jumbotron jumbotron-fluid home-hero-wrapper pd-0">
      <feb-navbar></feb-navbar>
      <div class="container">
        <img src="/assets/img/logo.png" class="brand-logo" alt="Front&Band">
      </div>
    </div>

  <div class="container">
    <h1 class="display-3 text-center">We Code. We Rock.</h1>
  </div>

<feb-footer></feb-footer>
  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
