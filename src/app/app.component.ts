import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean = true;
  constructor() {
    if(window.innerWidth < 1200){
      this.status = false;
    }
  }
  clickEvent(){
    this.status = !this.status;
  }

  onResize($event: UIEvent) {
    this.status = window.innerWidth >= 1200;
  }
}
