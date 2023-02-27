import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'vmi-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatementsComponent implements OnInit {
  public formGroup:FormGroup;

  constructor() {
  }

  ngOnInit(): void {

  }

  public onSubmit() {

  }

}
