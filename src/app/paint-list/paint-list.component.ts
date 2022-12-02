import { Component } from '@angular/core';
import { PaintCartService } from '../paint-cart.service';
import { PaintDataService } from '../paint-data.service';
import { Paint } from './Paint';

@Component({
  selector: 'app-paint-list',
  templateUrl: './paint-list.component.html',
  styleUrls: ['./paint-list.component.scss']
})
export class PaintListComponent {

  paints: Paint[] =[
    {
    name: 'Látex',
    size: '1 litro',
    color: 'Blanco',
    price: 1270,
    stock: 12,
    image: 'assets/images/latex.jpg',
    clearance: false,
    quantity: 0,
    },
    {
    name: 'Látex',
    size: '4 litros',
    color: 'Blanco',
    price: 3500,
    stock: 10,
    image: 'assets/images/latex.jpg',
    clearance: false,
    quantity: 0,
    },
    {
    name: 'Látex',
    size: '10 litros',
    color: 'Blanco',
    price: 7500,
    stock: 7,
    image: 'assets/images/latex.jpg',
    clearance: true,
    quantity: 0,
    },
    {
    name: 'Enduido',
    size: '1 litro',
    color: 'Blanco',
    price: 750,
    stock: 0,
    image: 'assets/images/latex.jpg',
    clearance: true,
    quantity: 0,
    },
    {
    name: 'Enduido',
    size: '5 litros',
    color: 'Blanco',
    price: 3200,
    stock: 10,
    image: 'assets/images/latex.jpg',
    clearance: false,
    quantity: 0,
    },
    {
    name: 'Enduido',
    size: '15 litros',
    color: 'Blanco',
    price: 9500,
    stock: 6,
    image: 'assets/images/latex.jpg',
    clearance: false,
    quantity: 0,
    },          
    {
    name: 'Impermeabilizante',
    size: '1 litro',
    color: 'Transparente',
    price: 1900,
    stock: 15,
    image: 'assets/images/latex.jpg',
    clearance: false,
    quantity: 0,
    },
    {
    name: 'Impermeabilizante',
    size: '10 litros',
    color: 'Transparente',
    price: 10800,
    stock: 0,
    image: 'assets/images/latex.jpg',
    clearance: true,
    quantity: 0,
    },
    {
    name: 'Impermeabilizante',
    size: '20 litros',
    color: 'Transparente',
    price: 21000,
    stock: 4,
    image: 'assets/images/latex.jpg',
    clearance: false,
    quantity: 0,
    },  
  ];

  

  constructor (
    private cart: PaintCartService,
    private paintDataService: PaintDataService){
  }

  addToCart (paint: Paint): void {

    this.cart.addToCart(paint);
    paint.stock -= paint.quantity;
    paint.quantity = 0;
  }
  maxReached(m: number) {
    console.log(m);
  }
}
