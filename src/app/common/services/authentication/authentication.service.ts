import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {

  }


  setLocalStorage() {
    localStorage.setItem('token', 'testToken');
  }
}
