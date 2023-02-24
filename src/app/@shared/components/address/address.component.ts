import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'vmi-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddressComponent implements OnInit {

  @Input() readonly: boolean;
  @Input() formGroupModel: FormGroup;

  public formGroup: FormGroup;
  public homeAddressCheckbox: boolean = true;

  constructor() {
  }
  ngOnInit(): void {
    this.homeAddressCheckbox = true;
  }

  public onSubmit() {

  }

}
