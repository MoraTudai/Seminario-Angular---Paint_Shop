import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaintPaintShopComponent } from './paint-paint_shop/paint-paint_shop.component';
import { PaintListComponent } from './paint-list/paint-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaintAboutComponent } from './paint-about/paint-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaintListComponent,
    ShoppingCartComponent,
    PaintAboutComponent,
    PaintPaintShopComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
