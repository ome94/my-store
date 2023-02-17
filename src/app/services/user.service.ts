import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user !: User

  constructor() { }

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

  login(username: string, password: string) {
    if (!this.user!.username)
      this.user.username = username;
  }
}
