import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user !: User|null;

  constructor() { }
  login(username: string, password: string) {
    if (!this.user!.username)
      this.user!.username = username;
  }

  logout() {
    this.user = null
  }
}
