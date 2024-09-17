import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoardData } from '../boardholder/boardholder.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() submit = new EventEmitter<BoardData>();
  @Output() close = new EventEmitter<void>();
  Players: number = 0;
  Rounds: number = 0;
  
  OnSubmit(){
    this.submit.emit({
      rows: this.Rounds,
      columns: this.Players
    })
    this.close.emit();
  }
  OnClose(){
    this.close.emit();
  }
}
