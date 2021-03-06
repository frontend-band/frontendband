import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feb-navbar',
  styleUrls: ['./navbar.component.less'],
  template: `
    <nav class="navbar">
    <div class="container">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
  
      <a href="#" class="brand">
        <img src="assets/img/logo-minimal.png" alt="">
      </a>
  
    </div>
   </nav> 
  `
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
