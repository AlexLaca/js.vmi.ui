import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'vmi-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonDetailComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
