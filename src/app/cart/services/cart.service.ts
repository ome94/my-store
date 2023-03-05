import { Injectable } from '@angular/core';

import { ProductService } from '../../products/services/product.service';
import { OrderedProduct } from '../../products/interfaces/product';

import { CartItem } from '../interfaces/cart-item';
import { Router } from '@angular/router';
import { UserDetails } from '../interfaces/user-details';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderedItems: OrderedProduct[] = []

  constructor(private productService: ProductService,
      private router: Router) { 
    this.getOrderedItems();
  }

  myCart: CartItem[] = [
    {
      productId: 1,
      quantity: 2
    },
    {
      productId: 2,
      quantity: 1
    },
    {
      productId: 6,
      quantity: 6
    }
  ]

  get total(): number {
    let total = 0
    
    for (let item of this.orderedItems){
      if (item.quantity)
        total += item.quantity * <number>item.price;
    }
    return <unknown>total.toFixed(2) as number;
  }

  editCart(productId: number, quantity: number|null) {
    let idx = this.myCart.findIndex(
      item => item.productId === productId
    );

    if(idx === -1){ // item is not in cart
      if (<number>quantity < 1) return;

      const newItem = { productId, quantity };

      // TODO:
      // make order request for product using a service
      this.myCart.push(newItem);
      this.productService.getProduct(productId).subscribe(
        product => this.orderedItems.push({...product, quantity})
      )
      
    } else if (quantity || quantity === null) {
      // TODO:
      // Increase cart item qty in db

      this.myCart[idx].quantity = quantity;
      this.orderedItems[idx].quantity = quantity;
    } else if (quantity < 1) { // item is completely dropped from cart
      const [droppedItem] = this.myCart.splice(idx, 1);
      this.orderedItems.splice(idx, 1);
      
      // TODO
      // delete dropped item from db using a service

    } 

  }

  getOrderedItems() {
    this.myCart.map(item =>
      this.productService.getProduct(item.productId).subscribe(
        product => {
          this.orderedItems.push({
            ...product,
            quantity: item.quantity
          });
      })
    );
  }

  checkout({name}:UserDetails) {
    this.router.navigate(['/success'], {queryParams: {customer: name}});
  }
}
