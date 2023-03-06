import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'vmi-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup<any>({

    });
  }

  public onSubmit() {

  }
}
