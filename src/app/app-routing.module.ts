import { PaintPaintShopComponent } from './paint-paint_shop/paint-paint_shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintAboutComponent } from './paint-about/paint-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paints',
    pathMatch: 'full'
  },
  {
    path: 'paints',
    component: PaintPaintShopComponent
  },
  {
    path: 'about',
    component: PaintAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
