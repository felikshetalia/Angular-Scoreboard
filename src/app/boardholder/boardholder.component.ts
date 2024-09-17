import { Component, Input, OnChanges, ViewEncapsulation, input } from '@angular/core';


export type BoardData = {
  rows: number;
  columns: number;
}

@Component({
  selector: 'app-boardholder',
  templateUrl: './boardholder.component.html',
  styleUrls: ['./boardholder.component.css']
  // styles: [`
  //   .board-table table:{
  //     border: 1mm;
  //   border-color: gray;
  //   align-self: center;
  //   width:fit-content;
  //   border-collapse: collapse;
  //   }
  // `]
})

export class BoardholderComponent {

  @Input() Board: BoardData;
  //playerNames: string[];
  //rows: any[][];

  constructor() {
  }
  
  OnInit(data:BoardData){
    this.Board.columns = data.columns;
    this.Board.rows = data.rows;
  }

  // OnAssign(players:number, rounds:number){
  //   this.Players = players;
  //   this.Rounds = rounds;
  // }

  // ngOnChanges(): void{
  //   //this.playerNames = this.playerNames;
  //   this.playerNames = Array.from({ length: this.Players }, (_, i) => `Player ${i + 1}`);
  //   this.OnSubmit();
  // }

  // OnSubmit(): void {
  //   //this.playerNames = Array.from({ length: this.Players }, (_, i) => `Player ${i + 1}`);

  //   this.rows = Array.from({ length: this.Rounds || 0 }, () => 
  //     Array.from({ length: this.Players || 0 }, () => '')
  //   );
  // }
}
