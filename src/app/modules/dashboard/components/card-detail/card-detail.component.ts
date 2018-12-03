import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '@app/common/models/dog.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() dogDetail: Dog;
  constructor() { }

  ngOnInit() {

  }

}
