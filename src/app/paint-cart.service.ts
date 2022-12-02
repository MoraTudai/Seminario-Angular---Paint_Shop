import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Paint } from './paint-list/Paint';

/**
 * *************************************
 * Maneja la lógica del carro de compras
 * *************************************
 */

@Injectable({
  providedIn: 'root'
})

export class PaintCartService {
//como quiero observar el cartList del servicio, quiero saber cuando agregan algo al servicio. Entonces encapsulamos el cartList en un behavior subject para poder suscribirnos a sus cambios
//El BehaviorSubject sirve para encapsular una variable, pasa a ser privada, para eso unamos private y la variable con un guión bajo al inicio
private _cartList: Paint[] = [];

cartList: BehaviorSubject<Paint[]> = new BehaviorSubject (this._cartList);

/*private _cartList: Paint[] = [];
  private _cartListSubject: BehaviorSubject<Paint[]>= new BehaviorSubject(this._cartList); //En lugar de this._cartList en estos últimos ()s, podríamos poner : [], para no confundir porque aún no están vinculados
  public cartList: Observable<Paint[]> = this._cartListSubject.asObservable();
*/
  constructor() { }
  
  addToCart(paint: Paint) {
    let item: Paint | undefined = this._cartList.find((v1) => v1.name == paint.name && v1.size == paint.size);
    if(!item) {
      this._cartList.push({... paint});
    }
    else{
      item.quantity += paint.quantity;
    }

    console.log(this._cartList);

    //Ahora le digo al BehaviorSubject (this.cartList.) que notifique que hubo un cambio (next) en mi variable en mi variable privada ((this._cartList))
    this.cartList.next(this._cartList) //es equivalente al emitt de eventos
  }

  
}
