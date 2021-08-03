import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  portfolio:boolean = true;
  offer:boolean = false;

  title = 'my-new-resume';
  constructor() { }

  ngOnInit(): void {
    this.portfolio = true
  }
  onSelect(val){
    if(val=='portfolio'){
      this.portfolio = true
      this.offer = false
    }else{
      this.offer = true
      this.portfolio = false
    }

  }
}
