import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PersonDetailConfig} from './person-detail.config';

@Component({
  selector: 'vmi-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input() public viewConfig: PersonDetailConfig;

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {

    this.formGroup = new FormGroup<any>({
      benefitedSocialRights: new FormControl(''),
      disability: new FormControl(''),
      schoolGrade: new FormControl('')
    });
  }

  public onSubmit() {

  }
}
