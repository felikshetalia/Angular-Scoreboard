import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scoreboard';
  logo = 'img/zort.ico'
  msg = 'zuhauahaaha debugging time!'
  btnClicked : boolean = false
  OnAdd(){
    this.btnClicked = true
  }
}
