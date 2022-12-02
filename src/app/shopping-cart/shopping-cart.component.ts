import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PaintCartService } from '../paint-cart.service';
import { Paint } from '../paint-list/Paint';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  cartList$: Observable<Paint[] | undefined>;// el signo $ se pone por convención (es una buena práctica) para entender que es un observable y no es el dato real.

  constructor(private cart: PaintCartService){
    this.cartList$ = cart.cartList.asObservable();
    //cart.cartList.subscribe(observable=>this.cartList = observable); en lugar de observable se puede poner cualquier cosa que haga referencia a cartList pero nombre corto como por ejemplo, c.
  }
}
