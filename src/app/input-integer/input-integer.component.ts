import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paint } from '../paint-list/Paint';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {

  constructor() { }
  
  @Input() quantity!: number;//los inputs son los corchetes del paint-list.component.html, junto a los paréntesis del outputs funciona el two-way data binding

  @Input() max!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();//los outputs son los paréntesis del paint-list.component.html, junto a los corchetes del inputs funciona el two-way data binding

  @Output() maxReached: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit(this.max);
    }
  }
  
  downQuantity(): void {
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: { key: any; }): void {
    //if (event.key<0 || event.key>paint.stock){
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
    
  }
}
