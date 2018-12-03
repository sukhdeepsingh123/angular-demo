import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { DashboardService } from './services/dashboard.service';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];
@NgModule({
  declarations: [DashboardComponent, CardDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule

  ],
  providers: [DashboardService]
})
export class DashboardModule { }
