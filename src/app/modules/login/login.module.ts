import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './services/login.service';


import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule } from '@angular/material';


const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [LoginService]
})


export class LoginModule {

}
