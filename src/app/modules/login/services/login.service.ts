import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) {

  }



  login() {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);
  }





}
