import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  portfolio: boolean = true;
  offer: boolean = false;
  mobile: boolean = false;
  showMain: boolean = false;
  title = 'my-new-resume';

  constructor() {}

  ngOnInit(): void {
    this.portfolio = true;
    if (window.screen.width < 992) {
      // 768px portrait
      this.mobile = true;
    }
  }
  onSelect(val) {
    this.showMain = true;
    if (val == 'portfolio') {
      this.portfolio = true;
      this.offer = false;
    } else {
      this.offer = true;
      this.portfolio = false;
    }
  }
}
