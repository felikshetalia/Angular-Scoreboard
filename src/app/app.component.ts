import { Component , ViewChild} from '@angular/core';
import { BoardData, BoardholderComponent } from './boardholder/boardholder.component';
import { FormComponent } from './form/form.component';

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
  Board: BoardData;
  OnAdd(){
    this.btnClicked = true;
  }
  OnClose(){
    this.btnClicked = false;
  }
  OnSubmit(data: BoardData){
    this.Board = data;
    this.btnClicked = false;
  }
  OnReset(){
    this.Board = null;
  }
  players: string[] = [];
  @ViewChild(BoardholderComponent) boardholder: BoardholderComponent;


}
