import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Paint } from './paint-list/Paint';

const URL = 'https://638900e6d94a7e5040ac64f2.mockapi.io/api/v1/paints';

@Injectable({
  providedIn: 'root'
})
export class PaintDataService {

  constructor(private http: HttpClient) { }
/********************************************************************
 * Consume la API de pinturas y devuelve un observable a la respuesta
 ********************************************************************/

  public getAll(): Observable<Paint[]>{

    //es como hacer un fetch('url', {method: 'GET'})
    
    return this.http.get<Paint[]>(URL)
              .pipe(
                tap( (paints: Paint[]) => paints.forEach(paint => paint.quantity = 0))
                
              ); //siempre this.http.verbo_que_necesito

//paint.quantity = 0;
    //código para consumir la api rest
    /*[
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
    ];*/
}
}