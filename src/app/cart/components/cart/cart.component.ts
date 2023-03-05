import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CartService } from '../../services/cart.service';

import { OrderedProduct } from '../../../products/interfaces/product';
import { UserDetails } from '../../interfaces/user-details';

@Component({
  selector: 'store-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderedItems: OrderedProduct[] = [];
  userInput: UserDetails = {
    name: '',
    address: '',
    card: ''
  }

  get total(): number {
    return this.cartService.total;
  }
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.orderedItems = this.cartService.orderedItems;
  }

  checkout(form: NgForm) {
    this.cartService.checkout(form.value);
  }
}
