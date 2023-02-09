import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Route[] = [
  {path: 'products', component: ProductListComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
