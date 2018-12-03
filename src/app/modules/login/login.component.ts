import { Component, OnInit } from '@angular/core';

import { LoginService } from '@app/modules/login/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }



  submit() {
    this.loginService.login();

  }




}
