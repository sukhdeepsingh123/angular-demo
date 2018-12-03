import { Component, OnInit } from '@angular/core';
import { Dog } from '@app/common/models/dog.model';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dogs: Dog[] = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dogs = this.dashboardService.getDogs();
    console.log(this.dogs);
  }

}
