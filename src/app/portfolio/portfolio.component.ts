import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  mobile;
  constructor() {}

  ngOnInit() {
    if (window.screen.width < 992) {
      // 768px portrait
      this.mobile = true;
    }
  }
}
