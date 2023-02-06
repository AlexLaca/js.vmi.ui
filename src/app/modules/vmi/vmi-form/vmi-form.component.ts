import {Component, OnInit} from '@angular/core';
import {PersonModel} from '../models/person.model';
import {FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'vmi-form',
  templateUrl: './vmi-form.component.html',
  styleUrls: ['./vmi-form.component.scss']
})
export class VmiFormComponent implements OnInit {

  public person: PersonModel;
  public formGroup: FormGroup;

  constructor(
    private translateService: TranslateService) {}

  ngOnInit(): void {
  }

  public onSubmit() {

  }

}
