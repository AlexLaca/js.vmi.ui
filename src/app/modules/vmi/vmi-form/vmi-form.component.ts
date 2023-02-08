import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PersonModel} from '../models/person.model';
import {FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'vmi-form',
  templateUrl: './vmi-form.component.html',
  styleUrls: ['./vmi-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VmiFormComponent implements OnInit {

  public person: PersonModel;
  public formGroup: FormGroup;
  public homeAddressCheckbox: boolean = true;
  public selectedValue: string = "val1";

  constructor(
    private translateService: TranslateService) {}

  ngOnInit(): void {
    this.homeAddressCheckbox = true;
  }

  public onSubmit() {

  }

}
