import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feb-footer',
  styleUrls: ['./footer.component.less'],
  template: `
    <footer class="footer">
      <div class="container">
        <span class="text-muted">Front&Band 2016</span>
      </div>
    </footer>
   `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
