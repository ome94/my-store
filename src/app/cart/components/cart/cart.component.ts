import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

import { OrderedProduct } from 'src/app/products/interfaces/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'store-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderedItems: OrderedProduct[] = [];
  userInput = {
    name: '',
    address: '',
    card: ''
  }

  get total(): number {
    let total = 0
    
    for (let item of this.orderedItems){
      if (item.quantity)
        total += item.quantity * <number>item.price;
    }
    return <unknown>total.toFixed(2) as number;
  }
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.orderedItems = this.cartService.orderedItems;
  }

  checkout(form: NgForm) {
    console.log(form);
  }
}
