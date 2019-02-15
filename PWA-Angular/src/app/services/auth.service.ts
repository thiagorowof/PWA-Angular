import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { User }    from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  users: User[] = [];

  constructor(
    public router: Router,  
  ) {
    if(localStorage.getItem('users') !== null && localStorage.getItem('users').length > 0){
      this.users = JSON.parse(localStorage.getItem('users'));
    }
  }

  RegisterUser(userData) {
    this.users.push(userData);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.users = (JSON.parse(localStorage.getItem('users')));
  }

  GetUser(){
    if(localStorage.getItem('users') !== null && localStorage.getItem('users').length > 0){
      return JSON.parse(localStorage.getItem('users'));
    }
    return [];
  }

  DeleteUser(index){
    let usersToDelete = JSON.parse(localStorage.getItem('users'));
    usersToDelete.splice(index, 1); 
    localStorage.setItem('users', JSON.stringify(usersToDelete));
    if(localStorage.getItem('users').length == 2){
      localStorage.removeItem('users');
    }
  }

  SignIn() {
    this.router.navigate(['home']);
  }

  SignOut() {
    // localStorage.removeItem('users');
    this.users = [];
    this.router.navigate(['login']);
  }

}