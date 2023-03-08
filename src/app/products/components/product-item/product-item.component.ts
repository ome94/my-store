import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { CartService } from '../../../cart/services/cart.service';

import { OrderedProduct, Product } from '../../interfaces/product';
import { CartItem } from '../../../cart/interfaces/cart-item';

@Component({
  selector: 'store-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {};
  itemsOrdered = this.cartService.orderedItems;
  itemOrdered?: OrderedProduct;

  constructor(private cartService: CartService) {}

  @Output() cartChange: EventEmitter<CartItem> = new EventEmitter<CartItem>()

  ngOnInit() {
    this.itemOrdered = this.itemsOrdered.find(
      item => item.id === this.product.id
    );
  }

  changeQty(qty: number|null) {
    this.cartChange.emit({
      productId: <number>this.product.id,
      quantity: qty
    });
  }
}
