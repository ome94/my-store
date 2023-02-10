import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';

const routes: Route[] = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductItemDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
