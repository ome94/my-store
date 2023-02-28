import { Component, Input, OnChanges } from '@angular/core';
import { faPen, faPlus, faMinus, faCircleXmark, faSackXmark } from '@fortawesome/free-solid-svg-icons';

import { CartService } from '../../../cart/services/cart.service';

import { Product } from '../../interfaces/product';

@Component({
  selector: 'store-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnChanges {
  @Input() product: Product = {};
  
  constructor(private cartService: CartService) {}
  
  addIcon = faPlus;
  dropIcon = faMinus;
  penIcon = faPen;
  rmIcon = faSackXmark;
  xIcon = faCircleXmark;

  editQty = false;
  
  cart = this.cartService.myCart

  ngOnChanges(): void {
    this._orderedQty = this.cart.find(item => 
      item.productId === this.product.id
    )?.quantity || 0;
  }

  private _orderedQty = 0;
  
  get orderedQty(): number {
    return this._orderedQty;
  }

  set orderedQty(qty: number) {
    qty = qty > 0 ? qty : 0;

    this.cartService.editCart(<number>this.product.id, qty);
    
    this._orderedQty = qty;
  }

  add() {
    this.orderedQty += 1;
  }

  drop() {
    this.orderedQty -= 1
  }

  remove() {
    this.orderedQty = 0
  }

  switchEdit() {
    this.editQty = !this.editQty;
  }
}
